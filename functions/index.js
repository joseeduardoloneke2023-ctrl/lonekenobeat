const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.webhookPagamento = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  const payload = req.body || {};
  const event = payload.event || payload.type || payload.status;
  const paymentData = payload.data || payload;

  try {
    // Verifica diferentes nomenclaturas de eventos de aprovação do gateway
    const isApproved =
      event === "payment.completed" ||
      event === "Pagamento Aprovado" ||
      event === "completed" ||
      paymentData.status === "completed";

    if (isApproved) {
      const orderId = paymentData.payment_id || paymentData.id || payload.payment_id;

      if (orderId) {
        // Atualiza a ordem no Firestore para Aprovado e liberta o acesso
        await admin.firestore().collection("orders").doc(String(orderId)).set(
          {
            status: "Aprovado",
            unlocked: true,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );

        console.log(`Pagamento ${orderId} processado e liberado com sucesso.`);
      }
    }

    return res.status(200).json({ status: "success", received: true });
  } catch (error) {
    console.error("Erro ao processar Webhook:", error);
    return res.status(500).send("Erro interno no servidor");
  }
});
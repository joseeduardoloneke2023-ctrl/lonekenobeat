export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const payload = req.body || {};
  const event = payload.event || payload.type || payload.status;
  const paymentData = payload.data || payload;

  const isApproved =
    event === 'payment.completed' ||
    event === 'Pagamento Aprovado' ||
    event === 'completed' ||
    paymentData.status === 'completed';

  if (isApproved) {
    const orderId = paymentData.payment_id || paymentData.id || payload.payment_id;

    if (orderId) {
      try {
        // Atualiza o documento no Firestore via REST API do Firebase
        const projectId = 'loneke-site-oficial';
        const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/orders/${orderId}?updateMask.fieldPaths=status&updateMask.fieldPaths=unlocked`;

        await fetch(firestoreUrl, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: {
              status: { stringValue: 'Aprovado' },
              unlocked: { booleanValue: true },
              updatedAt: { stringValue: new Date().toISOString() }
            }
          })
        });

        console.log(`Pagamento ${orderId} aprovado via Vercel Webhook.`);
      } catch (err) {
        console.error('Erro ao atualizar Firestore:', err);
      }
    }
  }

  return res.status(200).json({ status: 'success', received: true });
}
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// CONFIGURAÇÃO Z-API
const ZAPI_INSTANCE_ID = "3F49F2FB4900325F72302E947C70B89F"
const ZAPI_INSTANCE_TOKEN = "0D1654128286D42BC8266E23"
const ZAPI_CLIENT_TOKEN = "Fa7e6a8e9374c489486ad702cc5ae252aS" 

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, client-token',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const body = await req.json()
    const { 
      clientName, 
      clientPhone, 
      paymentMethod, 
      totalAmount, 
      items,
      fileUrl 
    } = body

    const numeroAdmin = "244924034159"
    const listaProdutos = items.map((i: any) => `🎵 *${i.nome}* - ${i.preco} KZ`).join('\n')

    // MENSAGENS
    const textoAdmin = `🔔 *NOVO PEDIDO - LONEKE NO BEAT*\n\n` +
                        `👤 *Cliente:* ${clientName.toUpperCase()}\n` +
                        `📞 *WhatsApp:* ${clientPhone}\n` +
                        `💰 *Total:* ${new Intl.NumberFormat('pt-AO').format(totalAmount)} Kz\n` +
                        `💳 *Método:* ${paymentMethod}\n\n` +
                        `📦 *Itens:*\n${listaProdutos}`

    const textoCliente = `Olá *${clientName}*, recebemos o teu pedido na *Loneke no Beat*! 🎵\n\n` +
                         `Estamos a validar o teu comprovativo. Em breve enviaremos os teus ficheiros! 🎧`

    const zapiHeaders = { "Content-Type": "application/json", "Client-Token": ZAPI_CLIENT_TOKEN }
    const zapiBaseUrl = `https://api.z-api.io/instances/${ZAPI_INSTANCE_ID}/token/${ZAPI_INSTANCE_TOKEN}`

    // 1. ENVIO PARA ADMIN
    await fetch(`${zapiBaseUrl}/send-text`, { 
        method: "POST", headers: zapiHeaders, body: JSON.stringify({ phone: numeroAdmin, message: textoAdmin }) 
    })
    
    // 2. ENVIO PARA CLIENTE (COM VALIDAÇÃO)
    let numeroClienteLimpo = clientPhone.replace(/\D/g, '')
    if (numeroClienteLimpo.length === 9) numeroClienteLimpo = '244' + numeroClienteLimpo
    
    await fetch(`${zapiBaseUrl}/send-text`, { 
        method: "POST", headers: zapiHeaders, body: JSON.stringify({ phone: numeroClienteLimpo, message: textoCliente }) 
    })

// 3. ENVIO DO COMPROVATIVO
    if (fileUrl) {
      console.log("Tentando enviar ficheiro...");
      const base64Limpo = fileUrl.includes('base64,') ? fileUrl.split('base64,')[1] : fileUrl;
      
      const payload = {
        phone: numeroAdmin,
        base64: base64Limpo,
        fileName: `comprovativo_${clientName.replace(/\s+/g, '_')}.jpg`,
        caption: `🔔 Comprovativo de: ${clientName}`
      };

      const resDoc = await fetch(`${zapiBaseUrl}/send-file-base64`, {
        method: "POST",
        headers: zapiHeaders,
        body: JSON.stringify(payload)
      });

      const resData = await resDoc.json();
      console.log("RESPOSTA DA Z-API SOBRE O FICHEIRO:", JSON.stringify(resData));
      
      if (!resDoc.ok) {
        console.error("Erro no envio do ficheiro:", resData);
      }
    } else {
      console.log("Nenhum fileUrl recebido na requisição.");
    }
/* ===================================================================
   ARQUIVO: order-bump-produtos.js
   -------------------------------------------------------------------
   Este arquivo contém exclusivamente os produtos que serão exibidos
   como Order Bump na página de checkout.

   O que é um Order Bump?
   ----------------------
   Um Order Bump é uma oferta adicional apresentada ao cliente durante
   o processo de compra. Com apenas um clique, o cliente pode adicionar
   esse produto ao pedido principal sem precisar iniciar uma nova compra.

   Estrutura de cada produto:
   --------------------------
   id         -> Identificador único do produto.
   titulo     -> Nome que será exibido ao cliente.
   preco      -> Valor do produto (em Kz ou na moeda utilizada).
   imagem     -> Caminho da imagem do produto.
   descricao  -> Pequena descrição apresentada ao cliente.

   Para adicionar um novo Order Bump:
   ----------------------------------
   Basta copiar um dos objetos abaixo, alterar os valores e adicioná-lo
   dentro do array "orderBumpProdutos", separando por vírgula.

   Exemplo:

   {
       id: "bump-3",
       titulo: "Nome do Produto",
       preco: 10000,
       imagem: "img/produto.png",
       descricao: "Descrição do produto."
   }

=================================================================== */

// Lista de produtos disponíveis para Order Bump
const orderBumpProdutos = [

    // ---------------------------------------------------------------
    // Produto 1
    // ---------------------------------------------------------------
    {
        // Identificador único do produto
        id: "bump-1",

        // Nome exibido ao cliente
        titulo: "Pack de Efeitos Sonoros Deluxe (SFX)",

        // Preço do produto
        preco: 5000,

        // Caminho da imagem do produto
        imagem: "img/1123.png",

        // Descrição curta do produto
        descricao: "Adicione mais de 500 efeitos sonoros profissionais para destacar as suas produções instantaneamente."
    },

    // ---------------------------------------------------------------
    // Produto 2
    // ---------------------------------------------------------------
    {
        // Identificador único do produto
        id: "bump-2",

        // Nome exibido ao cliente
        titulo: "Curso Rápido: Segredos da Masterização",

        // Preço do produto
        preco: 7500,

        // Caminho da imagem do produto
        imagem: "img/1123.png",

        // Descrição curta do produto
        descricao: "Aprenda a deixar os seus beats no volume máximo do mercado sem perder qualidade de áudio."
    }

];

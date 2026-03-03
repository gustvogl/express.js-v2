let categorias = [
    {id: 1, nome: "Temaki"},
    {id: 2, nome: "Combinado"},
    {id: 3, nome: "Bebidas"},
    {id: 4, nome: "Sobremesas"}
];

let produtos = [
    {
        categoriaId: 1,
        nome: "Temaki Completo",
        descricao: "Temaki com salmão, atum, kani, cream cheese e cebolinha",
        preco: 35.50,
        imagem: "https://www.comidaereceitas.com.br/wp-content/uploads/2008/05/temaki_salmao.jpg"
    },
    {
        categoriaId: 2,
        nome: "Combinado 20 Peças",
        descricao: "Combinado com 20 peças variadas",
        preco: 85.00,
        imagem: "https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/sujirusushi/1_5db63f77423df.jpeg"
    },
    {
        categoriaId: 3,
        nome: "Coca-Cola",
        descricao: "Refrigerante Coca-Cola 350ml",
        preco: 7.58,
        imagem: "https://carrefourbrfood.vtexassets.com/arquivos/ids/119765719/coca-cola-lata-350-ml-1.jpg?v=638224488171270000"
    }
];
module.exports = {categorias, produtos};

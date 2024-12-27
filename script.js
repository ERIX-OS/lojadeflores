document.addEventListener('DOMContentLoaded', function () {
    const produtos = [
        { nome: 'Rosa Vermelha', descricao: 'Rosa vermelha de alta qualidade', preco: 5.50 },
        { nome: 'Rosa Branca', descricao: 'Rosa branca pura e elegante', preco: 5.75 },
        { nome: 'Rosa Amarela', descricao: 'Rosa amarela vibrante', preco: 5.30 },
        { nome: 'Rosa Rosa', descricao: 'Rosa de cor rosa delicada', preco: 5.60 },
        { nome: 'Lírio Branco', descricao: 'Lírio branco simboliza pureza', preco: 8.00 },
        { nome: 'Lírio Amarelo', descricao: 'Lírio amarelo radiante', preco: 7.80 },
        { nome: 'Tulipa Vermelha', descricao: 'Tulipa vermelha apaixonante', preco: 6.50 },
        { nome: 'Tulipa Amarela', descricao: 'Tulipa amarela ensolarada', preco: 6.30 },
        { nome: 'Margarida', descricao: 'Margarida branca clássica', preco: 3.50 },
        { nome: 'Orquídea Roxa', descricao: 'Orquídea roxa exótica', preco: 12.00 },
        { nome: 'Orquídea Branca', descricao: 'Orquídea branca elegante', preco: 12.50 },
        { nome: 'Cravo Vermelho', descricao: 'Cravo vermelho vibrante', preco: 4.00 },
        { nome: 'Cravo Branco', descricao: 'Cravo branco puro', preco: 4.20 },
        { nome: 'Girassol', descricao: 'Girassol luminoso e alegre', preco: 7.00 },
        { nome: 'Rosa Laranja', descricao: 'Rosa de cor laranja intensa', preco: 5.50 },
        { nome: 'Rosa Roxa', descricao: 'Rosa de cor roxa vibrante', preco: 5.70 },
        { nome: 'Rosa Azul', descricao: 'Rosa azul rara e misteriosa', preco: 6.00 },
        { nome: 'Violeta', descricao: 'Pequena flor violeta', preco: 3.00 },
        { nome: 'Camélia Branca', descricao: 'Camélia branca pura', preco: 7.50 },
        { nome: 'Camélia Rosa', descricao: 'Camélia rosa delicada', preco: 7.70 },
        { nome: 'Dália Vermelha', descricao: 'Dália vermelha deslumbrante', preco: 8.50 },
        { nome: 'Dália Amarela', descricao: 'Dália amarela vibrante', preco: 8.30 },
        { nome: 'Dália Laranja', descricao: 'Dália laranja intensa', preco: 8.70 },
        { nome: 'Lavanda', descricao: 'Lavanda aromática', preco: 5.00 },
        { nome: 'Flor do Campo', descricao: 'Misto de flores do campo', preco: 4.50 },
    ];

    let produtosDiv = document.getElementById('produtos');
    produtos.forEach(produto => {
        let produtoCard = document.createElement('div');
        produtoCard.classList.add('product-card');
        produtoCard.innerHTML = `<h3>${produto.nome}</h3><p>${produto.descricao}</p><p>Preço: R$${produto.preco.toFixed(2)}</p>`;
        produtosDiv.appendChild(produtoCard);
    });
});

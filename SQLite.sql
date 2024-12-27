CREATE DATABASE LojaFlores;
USE LojaFlores;

CREATE TABLE Produtos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    Descricao TEXT,
    Preco DECIMAL(10, 2) NOT NULL,
    Estoque INT NOT NULL
);

INSERT INTO Produtos (Nome, Descricao, Preco, Estoque) VALUES
('Rosa Vermelha', 'Rosa vermelha de alta qualidade', 5.50, 100),
('Rosa Branca', 'Rosa branca pura e elegante', 5.75, 80),
('Rosa Amarela', 'Rosa amarela vibrante', 5.30, 120),
('Rosa Rosa', 'Rosa de cor rosa delicada', 5.60, 90),
('Lírio Branco', 'Lírio branco simboliza pureza', 8.00, 60),
('Lírio Amarelo', 'Lírio amarelo radiante', 7.80, 70),
('Tulipa Vermelha', 'Tulipa vermelha apaixonante', 6.50, 100),
('Tulipa Amarela', 'Tulipa amarela ensolarada', 6.30, 110),
('Margarida', 'Margarida branca clássica', 3.50, 150),
('Orquídea Roxa', 'Orquídea roxa exótica', 12.00, 40),
('Orquídea Branca', 'Orquídea branca elegante', 12.50, 35),
('Cravo Vermelho', 'Cravo vermelho vibrante', 4.00, 200),
('Cravo Branco', 'Cravo branco puro', 4.20, 180),
('Girassol', 'Girassol luminoso e alegre', 7.00, 60),
('Rosa Laranja', 'Rosa de cor laranja intensa', 5.50, 95),
('Rosa Roxa', 'Rosa de cor roxa vibrante', 5.70, 85),
('Rosa Azul', 'Rosa azul rara e misteriosa', 6.00, 75),
('Violeta', 'Pequena flor violeta', 3.00, 140),
('Camélia Branca', 'Camélia branca pura', 7.50, 55),
('Camélia Rosa', 'Camélia rosa delicada', 7.70, 50),
('Dália Vermelha', 'Dália vermelha deslumbrante', 8.50, 65),
('Dália Amarela', 'Dália amarela vibrante', 8.30, 68),
('Dália Laranja', 'Dália laranja intensa', 8.70, 63),
('Lavanda', 'Lavanda aromática', 5.00, 120),
('Flor do Campo', 'Misto de flores do campo', 4.50, 160);

SELECT Nome, Descricao, Preco, Estoque
FROM Produtos
ORDER BY Preco ASC;

SELECT AVG(Preco) AS PrecoMedio FROM Produtos;

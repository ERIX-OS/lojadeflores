<?php
include 'db_connect.php';

$sql = "SELECT Nome, Descricao, Preco, Estoque FROM Produtos ORDER BY Preco ASC";
$result = $conn->query($sql);

$produtos = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $produtos[] = $row;
    }
}
$conn->close();

echo json_encode($produtos);
?>

<?php
// Função para carregar resultados do arquivo
function carregar_resultados() {
    $arquivo = 'resultados.txt';
    if (file_exists($arquivo)) {
        $conteudo = file($arquivo, FILE_IGNORE_NEW_LINES);
        return array_map('intval', $conteudo);
    } else {
        return [0, 0, 0, 0, 0];
    }
}

// Função para salvar resultados no arquivo
function salvar_resultados($resultados) {
    $arquivo = 'resultados.txt';
    $conteudo = implode(PHP_EOL, $resultados);
    file_put_contents($arquivo, $conteudo);
}

// Processar feedback
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['feedback'])) {
    $feedback = intval($_POST['feedback']);
    $resultados = carregar_resultados();
    if ($feedback >= 1 && $feedback <= 5) {
        $resultados[$feedback - 1]++;
    }
    salvar_resultados($resultados);
}

$resultados = carregar_resultados();
$total_respostas = array_sum($resultados);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados da Pesquisa</title>
</head>
<body>
    <h1>Resultados da Pesquisa de Satisfação</h1>
    <ul>
        <li>😠: <?php echo $resultados[0]; ?> votos (<?php echo round(($resultados[0] / max($total_respostas, 1)) * 100, 2); ?>%)</li>
        <li>😞: <?php echo $resultados[1]; ?> votos (<?php echo round(($resultados[1] / max($total_respostas, 1)) * 100, 2); ?>%)</li>
        <li>😐: <?php echo $resultados[2]; ?> votos (<?php echo round(($resultados[2] / max($total_respostas, 1)) * 100, 2); ?>%)</li>
        <li>😊: <?php echo $resultados[3]; ?> votos (<?php echo round(($resultados[3] / max($total_respostas, 1)) * 100, 2); ?>%)</li>
        <li>😁: <?php echo $resultados[4]; ?> votos (<?php echo round(($resultados[4] / max($total_respostas, 1)) * 100, 2); ?>%)</li>
    </ul>
    <a href="feedback.php">Voltar para a pesquisa</a>
</body>
</html>

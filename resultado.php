<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pesquisa de Satisfação</title>
    <style>
        .emoji-button {
            font-size: 2rem;
            border: none;
            background: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Como você avalia nosso serviço?</h1>
    <form action="resultado.php" method="POST">
        <button class="emoji-button" name="feedback" value="1">😠</button>
        <button class="emoji-button" name="feedback" value="2">😞</button>
        <button class="emoji-button" name="feedback" value="3">😐</button>
        <button class="emoji-button" name="feedback" value="4">😊</button>
        <button class="emoji-button" name="feedback" value="5">😁</button>
    </form>
</body>
</html>

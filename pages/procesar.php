<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars(
        ($_POST['text_firstname_autokana'] ?? '') . " " . ($_POST['text_name_autokana'] ?? '')
    );
    $correo = htmlspecialchars($_POST['text_mail'] ?? '');
    $ciudad = htmlspecialchars($_POST['ciudad'] ?? '');
    $industria = htmlspecialchars($_POST['industria'] ?? '');
    $telefono = htmlspecialchars($_POST['tel'] ?? '');
    $contacto = htmlspecialchars($_POST['contacto'] ?? '');

    $to = "petitkarol555@gmail.com";
    $subject = "Nuevo mensaje desde el formulario web";
    $body = "Nombre: $nombre\nCorreo: $correo\nCiudad: $ciudad\nIndustria: $industria\nTeléfono: $telefono\nMotivo del contacto: $contacto";
    $headers = "From: $correo";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";
    }
}
?>

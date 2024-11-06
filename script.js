document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Instruções para redefinir a senha foram enviadas para ${email}`);
});


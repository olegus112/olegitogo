document.addEventListener('DOMContentLoaded', function() {
    const supportForm = document.getElementById('supportForm');
    const statusMessage = document.getElementById('statusMessage');

    supportForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const problem = document.getElementById('problem').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !problem || !message) {
            statusMessage.style.display = 'block';
            statusMessage.style.color = '#d93025';
            statusMessage.textContent = '⚠️ Пожалуйста, заполните все поля формы!';
            return;
        }

        statusMessage.style.display = 'block';
        statusMessage.style.color = '#1d8e2d';
        statusMessage.textContent = `✅ ${name}, ваш запрос по проблеме "${problem}" успешно отправлен! Мы свяжемся с вами по почте ${email} в ближайшее время.`;
    });
});

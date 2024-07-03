        (function () {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
                publicKey: "XGmWNioJhtkhBXdng",
            });
        })();



        window.onload = function () {
            document.getElementById('form').addEventListener('submit', function (event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_m3my7df', 'template_sq6t7tu', this)
                    .then(() => {
                        alert('Mensagem Enviada!');
                    }, (error) => {
                        alert('Algo deu errado...', error);
                    });
            });
        }



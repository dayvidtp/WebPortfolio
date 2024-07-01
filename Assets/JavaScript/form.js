<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

/*(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "XGmWNioJhtkhBXdng",
    });
})();


window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_m3my7df', 'template_gwctofr', this)
            .then(() => {
                alert('SUCCESS!');
            }, (error) => {
                alert('FAILED...', error);
            });
    });
}*/


/*document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("XGmWNioJhtkhBXdng");
 
    var myForm = document.getElementById('contact-form');
   
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
 
 
        emailjs.sendForm('sservice_m3my7df', 'template_gwctofr', this)
            .then(function() {
                alert('Mensagem enviada com sucesso!');
                myForm.reset();
            }, function(error) {
                alert('Erro ao enviar a mensagem: ', error);
            });
    });
});*/

/*const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_gwctofr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});*/

let nome = document.getElementById("user-name").value;
let email = document.getElementById("user-email").value;
let mensagem = document.getElementById("message").value;

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); //Impede o envio padrão do formulario

    //Configuração do email
    Email.send({
        SecureToken: "meu token aqui",
        to: "meu email",
        From: email,
        Subject: "Assunto do email",
        Body: "Nome: " + nome + " <br>Mensagem: " + mensagem
    }).then(
        function (message) {
            alert("Menssagem enviada com sucesso");
        }
    )
})
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

(function () {
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
}


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
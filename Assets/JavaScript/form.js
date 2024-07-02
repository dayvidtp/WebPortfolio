document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); //Impede o envio padrão do formulario

    //Configuração do email
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dayvid.pinto0@gmail.com",
        Password : "E3B98DA500C12120E44EF2FCEA51ED89AE3C",
        to: 'dayvid.pinto0gmail.com',
        From: document.getElementById("user-email").value,
        Subject: "Nova mensagem no seu portfolio",
        Body: "Nome: " + document.getElementById("user-name").value + " <br>Mensagem: " + document.getElementById("user-message").value
    }).then(
        message => {
        alert("Feito");
    }
    )
})
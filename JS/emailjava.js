

function sendEmail() {
    var userName = document.getElementById('Nome').value;
    var fone = document.getElementById('Fone').value;
    var email = document.getElementById('E-mail').value;
    var messageBody = "Nome: " + userName + "<br/> Fone: " + fone + "<br/> E-mail: " + email;
    

    Email.send({
        SecureToken : "a4cfa087-6df3-4f5d-8054-de4c14926ee5",
        To : 'jornadainclusivaifc@gmail.com',
        From : 'jornadainclusivaifc@gmail.com',
        Subject : "Contato via site",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}

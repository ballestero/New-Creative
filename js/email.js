//var nodemailer = require('nodemailer');

/*var btnSend = document.getElementById('sendBtn');

btnSend.addEventListener('click', function(){
    var name = document.getElementById('name').value,
    email = document.getElementById('email').value,
    phone = document.getElementById('phone').value,
    message = document.getElementById('message').value;

console.log('Dantos: '+ name+ " "+ email+" "+phone+' '+message);

});*/

/*var name = 'Jeison',
    email = 'ballesterojj',
    phone = '8752',
    message = 'hello world x';
*/
/*var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ballesterojj@gmail.com',
        pass: 'sjpsxrtjj'
    }
});

var mailOptions = {
    from: 'jeisonjb1292@hotmail.com',
    to: 'jeisonjb1292@hotmail.com',
    subject: 'Email New Creative Web',
    text: `Nombre: ${name} \nCorreo: ${email} \nTeléfono: ${phone} \nMensaje: ${message}`
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('El mensaje fue enviado: '+ info.response);
    }    
});*/



function sendMailX(){

var nodemailer = require('nodemailer');

var name = document.getElementById('name').value,
    email = document.getElementById('email').value,
    phone = document.getElementById('phone').value,
    message = document.getElementById('message').value;

console.log('Dantos: '+ name+ " "+ email+" "+phone+' '+message);



/*var name = 'Jeison',
    email = 'ballesterojj',
    phone = '8752',
    message = 'hello world x';
*/
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ballesterojj@gmail.com',
        pass: 'sjpsxrtjj'
    }
});

var mailOptions = {
    from: 'jeisonjb1292@hotmail.com',
    to: 'jeisonjb1292@hotmail.com',
    subject: 'Email New Creative Web',
    text: `Nombre: ${name} \nCorreo: ${email} \nTeléfono: ${phone} \nMensaje: ${message}`
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('El mensaje fue enviado: '+ info.response);
    }    
});
};
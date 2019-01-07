var nodemailer = require('nodemailer');

var name = document.getElementById('name').value,
    email = document.getElementById('email').value,
    phone = document.getElementById('phone').value,
    message = document.getElementById('message').value;

console.log('Datos: '+ name+ " "+ email+" "+phone+' '+message);



var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ballesterojj@gmail.com',
        pass: ''
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
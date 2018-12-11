var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ballesterojj@gmail.com',
        pass: 'sjpsxrtjj'
    }
});

var mailOptions = {
    from: 'jballesteros@ucenfotec.ac.cr',
    to: 'jeisonjb1292@hotmail.com',
    subject: 'Mensaje Web',
    text: 'hello world'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('El mensaje fue enviado: '+ info.response);
    }    
});
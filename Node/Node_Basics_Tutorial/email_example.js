var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com', // todo fill in 
        pass: 'yourpassword' // todo fill in 
    }
});

var mailOptions = {
    from: 'youremail@gmail.com', // todo fill in 
    to: 'myfriend@yahoo.com', // todo fill in 
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

var mailOptionsMultipleReceivers = {
    from: 'youremail@gmail.com', // todo fill in 
    to: 'myfriend@yahoo.com, myotherfriend@yahoo.com', // todo fill in 
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}

var mailOptionsHtml = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
}
const request = require('request');
const dotenv = require('dotenv');


async function sendLine() {
    dotenv.config();
    const url_line_notification = "https://notify-api.line.me/api/notify";
    const imageFile = "https://firebasestorage.googleapis.com/v0/b/project-07610433.appspot.com/o/data%2Fphoto1.jpg?alt=media&t=" + +(new Date())
    request({
        method: 'POST',
        uri: url_line_notification,
        header: {
            'Content-Type': 'multipart/form-data',
        },
        auth: {
            bearer: process.env.TOKEN,
        },
        form: {
            message: 'มีผู้บุกรุกในบริเวณพื้นที่ที่ติดตั้งอุปกรณ์ IOT!!',
            imageThumbnail: imageFile,
            imageFullsize: imageFile
        },
    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err)
        } else {
            console.log(body)
        }
    });
}
//sendLine();
module.exports = { sendLine };
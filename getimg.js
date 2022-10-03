const axios = require('axios').default;
const fs = require('fs');

async function dl() {
    const url =
        'https://firebasestorage.googleapis.com/v0/b/project-07610433.appspot.com/o/data%2Fphoto1.jpg?alt=media';
    const req = await axios.get(url, {
        responseType: 'arraybuffer',
    });
    //
    fs.writeFileSync('C:/Users/User/Desktop/ProjectAll/Project/yolov5/data/images/img.jpg', req.data, { encoding: 'binary' });
    console.log('IMG DONE');
}


module.exports = { dl };
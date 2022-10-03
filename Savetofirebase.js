const firebaseAdmin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');
const serviceAccount = require('./project-07610433-firebase-adminsdk-nny8q-24ea935ef7.json');
var moment = require('moment-timezone');
async function Savetofb() {
    const admin = firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
    });

    const uuid = uuidv4();
    const storageRef = admin.storage().bucket(`gs://project-07610433.appspot.com`);

    async function uploadFile(path, filename) {

        const storage = await storageRef.upload(path, {
            public: true,
            destination: `database/${filename}`,
            metadata: {
                metadata: {
                    firebaseStorageDownloadTokens: uuid,
                }
            }
        });
        return storage[0].metadata.mediaLink;
    }
    //var date = new Date(timestamp);
    (async () => {
        const url = await uploadFile('C:/Users/User/Desktop/ProjectAll/Project/yolov5/data/images/img.jpg', new Date() + "  DetectPerson.jpg");
        console.log(url);
    })();

}
//Savetofb();
module.exports = { Savetofb };
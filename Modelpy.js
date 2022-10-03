async function Modelprocess() {
const{ spawn} = require('child_process');
const line = require("./line");
const Sfb = require("./Savetofirebase");

const childPython = spawn('python',['C:/Users/User/Desktop/ProjectAll/Project/yolov5/detect.py']);

childPython.stdout.on('data', (data) => {
    console.log(`Object Person: ${data}`); 
    if(data == 0){
        console.log(str = "Dont Have Person")
        
    }else{
        console.log(str = "Have Person")
        const Sline = line.sendLine();
        console.log(Sline);
        const saveimg = Sfb.Savetofb();
        console.log(saveimg);
        console.log(str = "Save ImgDetect To Firebase Success");
    }
});

childPython.stderr.on('data', (data) => {
    console.error(`run : ${data}`);
});

childPython.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
}
module.exports = { Modelprocess };

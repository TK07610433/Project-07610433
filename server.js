const lib = require("./code-process");
const line = require("./line");
const getphoto = require("./getimg");
const mol = require("./Modelpy");
const express = require('express')
const app = express()
const port = 3000


async function main() {
  await getphoto.dl();
  console.log("Save img.jpg success");

  //Model Google Api
  /*
  const fileName = 'C:/Users/User/Desktop/ProjectAll/Project/yolov5/data/images/img.jpg'
  console.log("Img ready to Detect");

  const process = lib.localizeObjects(fileName);
  console.log(process);
  */

  //My Model 
    const runmodel = mol.Modelprocess();
    console.log(runmodel);
}

//http://localhost:3000/test07610433
app.get('/', (req, res) => {
  main();
  res.send('Run Server!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

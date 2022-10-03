const line = require("./line");
const vision = require('@google-cloud/vision');
const fs = require('fs');

async function localizeObjects(fileName) {

  const client = new vision.ImageAnnotatorClient({
    keyFilename: 'API.json'
  });

  const request = {
    image: { content: fs.readFileSync(fileName) },
  };

  const [result] = await client.objectLocalization(request);
  const objects = result.localizedObjectAnnotations;
  objects.forEach(object => {
    console.log(`Name: ${object.name}`);
    console.log(`Confidence: ${object.score}`);
    const vertices = object.boundingPoly.normalizedVertices;
    vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
  });

  if (objects.find((object) => { return object.name == "Person" })) {
    const Sline = line.sendLine();
    console.log(Sline);
  } else {
    console.log('Stop No object Person');
  }
}
module.exports = { localizeObjects };

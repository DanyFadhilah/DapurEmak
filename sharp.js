const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'src/public/images/heros/hero-image_3.jpg');
const largeOutputPath = path.join(__dirname, 'src/public/images/heros/hero-image_3-large.jpg');
const smallOutputPath = path.join(__dirname, 'src/public/images/heros/hero-image_3-small.jpg');

sharp(inputPath)
  .resize(1600) // large resolution
  .toFile(largeOutputPath, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });

sharp(inputPath)
  .resize(800) // small resolution
  .toFile(smallOutputPath, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });

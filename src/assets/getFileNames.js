const fs = require("fs");
const folderPath = "./images/"

fs.readdir(folderPath, (err, files) => {
  let index = 1;
  files.forEach(file => {
    console.log(file)
    fs.rename(`${folderPath}${file}`, `${folderPath}image${index}.jpg`, () => {});
    index++;
  });
});

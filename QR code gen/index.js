import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'

inquirer.prompt([{message: "enter the url to generate QR code",
name: "URL"},])

.then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr.png'));

console.log("QR code generated successfully");

fs.writeFile("url.txt", answers["URL"], (err) => {
  if (err) throw err;
  console.log("url saved in url.txt");
});
});

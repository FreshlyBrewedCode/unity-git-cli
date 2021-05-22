import * as https from "https";
import * as fs from "fs";

export const __repo =
  "https://raw.githubusercontent.com/FreshlyBrewedCode/unity-git-cli/master/files";

export const download = (url: string, outputPath: string) => {
  return new Promise<void>((resolve, reject) => {
    var file = fs.createWriteStream(outputPath);
    var request = https
      .get(url, function (response) {
        response.pipe(file);
        file.on("finish", function () {
          file.close();
          resolve();
        });
      })
      .on("error", function (err) {
        // Handle errors
        fs.unlink(outputPath, () => {});
        reject(err.message);
      });
  });
};

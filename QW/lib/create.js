const { setTemp, testTemp } = require("./Temps");

let { exec } = require("child_process");
let args = process.argv;
args.splice(0, 2);

let folder, baseUrl, testFile, indxFile, styleFile;

if (args.length > 0) {
  // Check if its url valid
  let str = args[0].split("/");
  if (str.length > 1) {
    baseUrl = str.slice(0, str.length - 1).join("/");
    folder = str[str.length - 1];
  } else {
    baseUrl = ".";
    folder = str[0];
  }
  styleFile = `${folder}/index.scss`;
  testFile = `${folder}/index.spec.js`;
  indxFile = `${folder}/index.jsx`;
  folder =
    folder.charAt(0).toUpperCase() +
    folder.toLowerCase().substr(1, folder.length - 1);
} else {
  throw new Error("***** Nigga No Args *******");
}

const setup = (err, strout, strerr) => {
  if (err) {
    console.log(`error: ${err.message}`);
    return;
  }
  if (strerr) {
    console.log(`strerr: ${strerr}`);
    return;
  }
  let compTemp = setTemp(folder);
  let testTemplate = testTemp(folder);

  exec(`echo '${testTemplate}' >> ${baseUrl}/${testFile}`, callback);
  exec(`echo '${compTemp}' >> ${baseUrl}/${indxFile}`, callback);
};

const callback = (err, strout, strerr) => {
  if (err) {
    console.log(`error: ${err.message}`);
    return;
  }
  if (strerr) {
    console.log(`strerr: ${strerr}`);
    return;
  }
};

exec(
  `mkdir -p ${baseUrl}/${folder} && touch ${baseUrl}/${styleFile} ${baseUrl}/${testFile} ${baseUrl}/${indxFile}`,
  setup
);

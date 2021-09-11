let { exec } = require("child_process");
let args = process.argv;
args.splice(0, 2);

let folder, baseUrl, jsxFile, indxFile;

if (args.length > 0) {
  // Check if its url valid
  let str = args[0].split("/");
  if (str.length > 1) {
    baseUrl = str.slice(0, str.length - 1).join("/");
    folder = str[str.length - 1];
    jsxFile = `${folder}/${folder}.jsx`;
    indxFile = `${folder}/index.js`;
  } else {
    baseUrl = ".";
    folder = str[0];
    jsxFile = `${folder}/${folder}.jsx`;
    indxFile = `${folder}/index.js`;
  }
} else {
  throw new Error("***** Nigga No Args *******");
}

function setTemp(compName) {
  return `import React from "react";
    
function ${compName}() {
  return (
    <>
      
    </>
  );
}

export default ${compName};`;
}

function indxTemp(compName) {
  return `import ${compName} from "./${compName}";
export default ${compName};`;
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
  let indexTemp = indxTemp(folder);

  exec(`echo '${compTemp}' >> ${baseUrl}/${jsxFile}`, callback);
  exec(`echo '${indexTemp}' >> ${baseUrl}/${indxFile}`, callback);
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
  `mkdir -p ${baseUrl}/${folder} && touch ${baseUrl}/${jsxFile} ${baseUrl}/${indxFile}`,
  setup
);

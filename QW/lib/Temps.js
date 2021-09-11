function setTemp(compName) {
  return `import React from "react";
import "./index.scss";
    
function ${compName}() {
  return (
    <>
      
    </>
  );
}

export default ${compName};`;
}

function testTemp(compName) {
  return `import React from "react";
import ${compName} from ".";
import { shallow } from "enzyme";
import { expect } from "@jest/globals";

describe("${compName} component", () => {
  test("Test1", () => {
    
  });
});`;
}

module.exports = {
  testTemp: testTemp,
  setTemp: setTemp,
};

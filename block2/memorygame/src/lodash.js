var _ = require("lodash");
import React from "react";

var num = [1, 2, 3];
var numbers = [1, 2, 4];

var difference = _.xor(num, numbers);

console.log(difference);

function App() {
  return (
    <div>
      <p>hi</p>
    </div>
  );
}

// import logo from "./logo.svg";
// import "./App.css";
// import Header from "./components/Header";

import { values } from "lodash";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//     </div>
//   );
// }

var _ = require("lodash");
// 1
// var num = [1, 2, 3];
// var numbers = [1, 2, 4];
// var ans = _.xor(num, numbers);
// ans = ans[0];

let products = [
  { product: "banana", hasGMO: true },
  { product: "apple", hasGMO: false },
  { product: "orange", hasGMO: false },
];

let al = [{ as: "ra", bga: true }];

//2
//  var ans = _.forOwn(products, function (value, key) {
//   if (value.hasGMO === false) {
//     console.log(value);
//   }
// });

//3
// var ans = _.findKey(products, function (o) {
//   return o.hasGMO === true;
// });

// 4
// var ans = [1, 3, 4, 5, 1, 43, 23, 132];
// _.fill(array, 0, 0, array.length);

// 5
// var arr = [1, 4, 5, 3];
// var mas = [1, 2, 3, 4];
// var ans = _.intersectionWith(arr, mas, _.isEqual);

//6
// const arr1 = [5, 2, 1, 3];
// const arr2 = [2, 1, 5, 4];
// var ans = _.union(arr1, arr2);

//7
//var num = [1, 2, 3];
// var numbers = [1, 2, 4];
// var ans = _.xor(num, numbers);

//8
// var val1 = { a: "haha" };
// var val2 = { a: "haha" };
// var ans = _.isEqual(val1, val2);

// 9
// const arr = [4, 5, 2, 452];
// var ans = _.max(arr);

// 10
// const arr = [1, 2, 3, 4];
// var ans = _.sum(arr);

//12
//var ans = _.union(products, al);

//11
// const ans = _.random(1, 100);

//13
// var ans = _.forOwn(products, function (value, key) {
//   // if (value.hasGMO) {
//   //   console.log(value, "13");
//   //   return;
//   // }
//   if(value)
//   const newObj = { ...value };
//   console.log(newObj);
// });
// let ans = _.findKey(products, { hasGMO: true });

//14
// var ans = _.keys(products);
var ans = _.values(products);

function App() {
  console.log(ans);
  return (
    <div>
      <p>hi</p>
    </div>
  );
}

export default App;

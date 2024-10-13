/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.filter(item=>item.profession=="developer")
    .map(item=>console.log(item))
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.filter(item=>item.profession=="developer")
  .forEach(item=>console.log(item))
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let delArr=arr.filter(item=>item.profession!="admin")
  console.log(delArr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "mohit", age: "21", profession: "developer" },
    { id: 5, name: "yash", age: "22", profession: "developer" },
    { id: 6, name: "vishal", age: "18", profession: "admin" },
  ];
  let con = arr.concat(arr1)
  console.log(con);
}

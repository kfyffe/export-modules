//private function that takes in a number as parameter and stores it in a list
var numberList = [];

function getNumbers(number) {
  numberList.push(number);
  return numberList;
}


//private function that sorts the list in ascending order
function orderList(){
  return numberList.sort();
}




//function to export the sorted list
module.exports = {

  getNumbers: getNumbers,
  orderList: orderList

};
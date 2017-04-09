console.log('working');
function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  let money = {
    penny: {
      value: 0.01,
      amount: 0
    },
    nickel: {
      value: 0.05,
      amount: 0
    },
    dime: {
      value: 0.10,
      amount: 0
    },
    quarter: {
      value: 0.25,
      amount: 0
    },
    one: {
      value: 1,
      amount: 0
    },
    five: {
      value: 5,
      amount: 0
    },
    ten: {
      value: 10,
      amount: 0
    },
    twenty: {
      value: 20,
      amount: 0
    },
    onehundred: {
      value: 100,
      amount: 0
    }  
  };
  
  function loadMoneny(arr){
    let name = arr[0].toLowerCase().replace(/ /g, '');
    money[name].amount += arr[1];
  }
  
  
  return change;
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
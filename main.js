// let hour = 9;
// let isWeekend = true;
//
// if (hour < 10 || hour > 18 || isWeekend) {
//   alert ('The office is closed.');
// }
//
//
// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";
//
// alert ( firstName || lastName || nickName || "Anonymus");
//
// let sat = 12;
// let minute = 30;
//
// if ( sat == 12 && minute == 30) {
//   alert ('The time is 12:30');
// }

let userName = prompt("Who's there?",'');

if (userName === 'Admin') {
  let pass = prompt ('Password?', '');

  if ( pass === 'TheMaster') {
    alert ('Welcome!');
  } else if (pass === '' || pass === null) {
    alert ('Canceled' );
  }else {
    alert ('Wrong password');
  }
  }else if (userName === '' || userName === null) {
    alert ('Canceled' );
  } else {
    alert ("I dont know you");
  }

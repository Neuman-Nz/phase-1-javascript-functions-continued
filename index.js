// code your solution here
function saturdayFun(x = "roller-skate"){
    let message =`This Saturday, I want to ${x}!`
    return message;
}

function mondayWork(y = "go to the office" , z = "work from home"){
    let message = `This Monday, I will ${y}.`
    let message2 = `This Monday, I will ${z}.`
   
    return message2 && message;
}

function wrapAdjective(a) {
    const innerFunction = function (b) {
      return `You are ${a}${b}${a}!`;
    };
    return innerFunction
  }
  
  wrapAdjective("*")("a hard worker");
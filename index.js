// code your solution here
function saturdayFun (activity='roller-skate'){
    return`This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}.`
  }

  function wrapAdjective(result="*"){
    return function(rule="a dedicated programmer"){
        return `You are ${result}${rule}${result}!`
    }
} 
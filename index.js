function scuberGreetingForFeet(){
  if (Feet <= 400) {return ('This one is on me!')}
    else if (Feet>2000&&Feet<=2500){return ('I will gladly take your thirty bucks.')}
    else {return ('No can do.')}

}
function ternaryCheckCity(){
  if (ternaryCheckCity('NYC')) {return ("Ok, sounds good." )}
  else if (ternaryCheckCity('Pittsburgh')) {return ('No go.')}

}

function switchOnCharmFromTip(){
  if (switchOnCharmFromTip('generous')) {return ('Thank you so much.')}
  else if (switchOnCharmFromTip('not as generous')) {return ('Thank you.')}
  else {return ('Bye.')}
}
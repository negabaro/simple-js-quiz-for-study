function buildQuiz(){
  console.log('buildQuiz');
}

function showResults(){
  console.log('showResults');
}

// display quiz right away
buildQuiz();





//functionがあっても取得できない
//(function() {

//onload中ではgetElementByIdの値取れた
onload = function(){
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

console.log(document.getElementById("quiz"));
console.log(document);
console.log('hello?');
console.log(quizContainer);
console.log(resultsContainer);
console.log(resultsContainer);
  
  
  // on submit, show results
  //submitButtonのDOMはonload中でしか取れないのでここしかかけない？
  submitButton.addEventListener('click',showResults);
  
//なんでnullだっけ？
  };//http://d.hatena.ne.jp/esperia/20100325/1269515821

//})();



const myQuestions = [
  {
    question: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the best site ever created?",
    answers: {
      a: "SitePoint",
      b: "Simple Steps Code",
      c: "Trick question; they're both the best"
    },
    correctAnswer: "c"
  },
  {
    question: "Where is Waldo really?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Sitting in a tree",
      d: "Minding his own business, so stop asking"
    },
    correctAnswer: "d"
  }
];

const output = [];
//outputをglobal化した
function buildQuiz(){
  //const output = [];
  
  myQuestions.forEach(
  //forEachループなので、現在の値とインデックス（配列中の現在のアイテムの位置を示す数字）と配列をパラメーターとして受け取ります
  //現在の値とインデックスが必要で、それぞれcurrentQuestionとquestionNumberと名付けています。
    (currentQuestion, questionNumber)=> {
      console.log(" currentQuestion: "+currentQuestion);
      console.log(" currentQuestion: "+currentQuestion+ " questionNumber: "+questionNumber);
      
      const answers = [];
      
      //for(letter in currentQuestion.answers){だとエラー出た..
      for(var letter in currentQuestion.answers){
        console.log(" currentQuestion.answers: "+currentQuestion.answers + " letter: "+ letter);
        //currentQuestion.answersはobjectしか見えない
        
        
      //それぞれの質問に対してHTMLを生成します。まずは解答の選択肢を格納する配列を用意します。
        answers.push(
          //pushについて
        `<label>
         <input type="radio" name="question${questionNumber}" value="${letter}">
         ${letter}:
         ${currentQuestion.answers[letter]}
        </label>`
        );
      } //end for
      
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")}</div>`
        );
        
      
      
      
    }
  );
  console.log('buildQuiz');
}

function showResults(){
  console.log('showResults');
}

// display quiz right away
//buildQuiz();





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
  
  //display quiz right away
  buildQuiz();
  //outputは別の関数なので呼べない。どうすれば良いか
  quizContainer.innerHTML = output.join('');
  
  // on submit, show results
  //submitButtonのDOMはonload中でしか取れないのでここしかかけない？
  submitButton.addEventListener('click',showResults);
  
//なんでnullだっけ？
  };//http://d.hatena.ne.jp/esperia/20100325/1269515821

//})();



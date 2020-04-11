var userScore = 0;
var computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_text = document.getElementById('result');
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissor = document.getElementById('s')

main();

function getComputer_choice() {
  const cases = ['Rock', 'Paper', 'Scissor'];
  const inte = Math.floor(Math.random() * 3);
  return cases[inte];
}

function who_wins(choices) {
  switch (choices) {
    case 'RockScissor':
    case 'ScissorRock':
    case 'PaperRock':
      return "user"
      break;
    case 'ScissorRock':
    case 'RockPaper':
    case 'PaperScissor':
      return "computer"
      break;
    case 'RockRock':
    case 'PaperPaper':
    case 'ScissorScissor':
      return "draw"
      break;
  }
}

function game(element) {
  const user_choice = element;
  const computer_choice = getComputer_choice();
  switch (who_wins(user_choice + computer_choice)) {
    case 'user':
      console.log('user wins')
      userScore = userScore + 1;
      userScore_span.innerHTML = userScore;
      result_text.innerHTML = user_choice + " > " + computer_choice;
      result_text.style.textAlign ="center"

      break;
    case 'computer':
      console.log('computer wins')
      computerScore = computerScore + 1;
      computerScore_span.innerHTML = computerScore;
      result_text.innerHTML = user_choice + " < " + computer_choice;
      result_text.style.textAlign ="center"


      break;
    case 'draw':
      console.log('It is a draw')
      result_text.innerHTML = "It is a draw!";
      result_text.style.textAlign ="center"

      break;
  }

}

function main() {
  rock.addEventListener('click', ()=>{
    game("Rock");
  });
  paper.addEventListener('click', ()=>{
    game("Paper");
  });
  scissor.addEventListener('click', ()=>{
    game("Scissor");
  });
}

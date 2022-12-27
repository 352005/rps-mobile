let closeRules = document.querySelector('.cancel');
let rulePage = document.querySelector('#rulePage');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let timer = document.querySelector('#timer');
let winScore = document.querySelector('#winScore');
let realScore = document.querySelector('#realScore');
let scoreValue = 0;
let winPage = document.querySelector('#winPage');
let playerRocks = document.querySelectorAll('.chosedRock');
let playerPapers = document.querySelectorAll('.chosedPaper');
let playerScissorses = document.querySelectorAll('.chosedScissors');
let computerRocks = document.querySelectorAll('.comRock');
let computerPapers = document.querySelectorAll('.comPaper');
let computerScissorses = document.querySelectorAll('.comScissors');
let winText = document.querySelector('.win');

//bring down the rules
const showRules = ()=>{
  rulePage.style.transform = 'translateY(0px)';
}

//close the rule page
closeRules.addEventListener('click', ()=>{
  rulePage.style.transform = 'translateY(-10000px)';
});

//getting random integers between 1 & 3
const minmax = [1,3];

const random = ()=>{
  const rand = Math.ceil(Math.random() * (minmax[1] - minmax[0] + 1));
  
  return rand;
}

//rock, paper, scissors counter
 let timerArr = ['Rock','Paper','Scissors'];

setTimeout(()=>{
  timer.innerHTML = timerArr[0];
},0);

setTimeout(()=>{
  timer.innerHTML = timerArr[1];
},1000);

setTimeout(() => {
  timer.innerHTML = timerArr[2];
}, 2000);

timer.textContent = timerArr[2];

  let rock1 = false;
  let rock2 = false;
  let paper1 = false;
  let paper2 = false;
  let scissors1 = false;
  let scissors2 = false;
   
   //click event for rock
 const rockClicked = ()=>{
   removeEventListener('click',paperClicked);
   removeEventListener('click',scissorsClicked);
   
   rock1 = true;
   
   //makes rock visible
  playerRocks.forEach(playerRock =>{ 
  playerRock.style.transform = 'translateX(0)';
  });
  
  //makes paper hidden
  playerPapers.forEach(playerPaper =>{ 
  playerPaper.style.transform = 'translateX(10000px)';
  });
  
  //makes scissors hidden
  playerScissorses.forEach(playerScissors =>{ 
  playerScissors.style.transform = 'translateX(10000px)';
  });
  
  //lose function if AI wins
  const showLoseForRock = ()=>{
    winPage.style.transform = 'translateX(0px)';
    
    realScore.innerHTML = --scoreValue;
    winScore.innerHTML = realScore.innerHTML;
    winText.innerHTML = 'YOU LOSE';
    winText.style.marginLeft = '0px';
  
  }
  
  //win function if player wins
  const showWinForRock = ()=>{
    winPage.style.transform = 'translateX(0px)';
   
    realScore.innerHTML = ++scoreValue;
    winScore.innerHTML = realScore.innerHTML;
    winText.innerHTML = 'YOU WIN';
    winText.style.marginLeft = '0px';
  
  }
  
  //draw function if no winner
  const showDrawForRock =()=>{
    winScore.innerHTML = realScore.innerHTML;
    winPage.style.transform = 'translateX(0px)';
    winText.innerHTML = 'DRAW';
    winText.style.marginLeft = '30px';
  }
  
  //getting what the AI picks based on the return value of random() and choosing winner afterwards
  switch (random()) {
    case 1:
      rock2 = true;
    computerRocks.forEach(computerRock =>{
    computerRock.style.transform = 'translateX(0)';
    });
    
    showDrawForRock();
    break;
    case 2:
      paper2 = true;
    computerPapers.forEach(computerPaper =>{ 
    computerPaper.style.transform = 'translateX(0)';
    });
    
    showLoseForRock();
    break;
    
    case 3:
      scissors2 = true;
    computerScissorses.forEach(computerScissors =>{ 
    computerScissors.style.transform = 'translateX(0)';
    });
    
    showWinForRock();
    break;
    
    default:
    console.log('Error occured');
  }
 }
 rock.addEventListener('click',rockClicked);
 
 const paperClicked = ()=>{
   removeEventListener('click',rockClicked);
   removeEventListener('click',scissorsClicked);
   
   paper1 = true;
   
  playerPapers.forEach(playerPaper =>{ 
  playerPaper.style.transform = 'translateX(0)';
  });
  
  playerRocks.forEach(playerRock =>{ 
  playerRock.style.transform = 'translateX(10000px)';
  });
  
  playerScissorses.forEach(playerScissors =>{ 
  playerScissors.style.transform = 'translateX(10000px)';
  });
  
  const showWinForPaper = ()=>{
    winPage.style.transform = 'translateX(0px)';
   
    realScore.innerHTML = ++scoreValue;
    winScore.innerHTML = realScore.innerHTML;
    winText.innerHTML = 'YOU WIN';
    winText.style.marginLeft = '0px';
  
  }
  
  const showLoseForPaper = ()=>{
    winPage.style.transform = 'translateX(0px)';
    
    realScore.innerHTML = --scoreValue;
    winScore.innerHTML = realScore.innerHTML;
    winText.innerHTML = 'YOU LOSE';
    winText.style.marginLeft = '0px';
  
  }
  
  const showDrawForPaper =()=>{
    winScore.innerHTML = realScore.innerHTML;
    winPage.style.transform = 'translateX(0px)';
    winText.innerHTML = 'DRAW';
    winText.style.marginLeft = '30px';
    
  }
  
  switch (random()) {
    case 1:
      rock2 = true;
    computerRocks.forEach(computerRock =>{
    computerRock.style.transform = 'translateX(0)';
    });
    showWinForPaper();
    
    break;
    case 2:
      paper2 = true;
    computerPapers.forEach(computerPaper =>{ 
    computerPaper.style.transform = 'translateX(0)';
    });
    showDrawForPaper();
    
    break;
    
    case 3:
      scissors2 = true;
    computerScissorses.forEach(computerScissors =>{ 
    computerScissors.style.transform = 'translateX(0)';
    });
    showLoseForPaper();
    
    break;
    
    default:
    console.log('Error occured');
  }
 }
 paper.addEventListener('click',paperClicked);
 
 const scissorsClicked = ()=>{
   removeEventListener('click',rockClicked);
   removeEventListener('click',paperClicked);
   
   scissors1 = true;
   
  playerScissorses.forEach(playerScissors =>{ 
  playerScissors.style.transform = 'translateX(0)';
  });
  
  playerPapers.forEach(playerPaper =>{ 
  playerPaper.style.transform = 'translateX(10000px)';
  });
  
  playerRocks.forEach(playerRock =>{ 
  playerRock.style.transform = 'translateX(10000px)';
  });
  
  const showWinForScissors = ()=>{
    winPage.style.transform = 'translateX(0px)';
   
    realScore.innerHTML = ++scoreValue;
    winScore.innerHTML = realScore.innerHTML;
    winText.innerHTML = 'YOU WIN';
    winText.style.marginLeft = '0px';
  
  }
  
  const showLoseForScissors = ()=>{
    winPage.style.transform = 'translateX(0px)';
    
    realScore.innerHTML = --scoreValue;
    winScore.innerHTML = realScore.innerHTML;
    winText.innerHTML = 'YOU LOSE';
    winText.style.marginLeft = '0px';
  
  }
  
  const showDrawForScissors =()=>{
    winScore.innerHTML = realScore.innerHTML;
    winPage.style.transform = 'translateX(0px)';
    winText.innerHTML = 'DRAW';
    winText.style.marginLeft = '30px';
    
  }
  
  switch (random()) {
    case 1:
      rock2 = true;
    computerRocks.forEach(computerRock =>{
    computerRock.style.transform = 'translateX(0)';
    });
    showLoseForScissors();
    
    break;
    case 2:
      paper2 = true;
    computerPapers.forEach(computerPaper =>{ 
    computerPaper.style.transform = 'translateX(0)';
    });
    showWinForScissors();
    
    break;
    
    case 3:
      scissors2 = true;
    computerScissorses.forEach(computerScissors =>{ 
    computerScissors.style.transform = 'translateX(0)';
    });
    showDrawForScissors();
    
    break;
    
    default:
    console.log('Error occured');
  }
 }
 scissors.addEventListener('click',scissorsClicked);

//playagain function to return things to normal state
const playAgain = ()=>{
  winPage.style.transform = 'translateX(1000px)';
  playerScissorses.forEach(playerScissors =>{ 
  playerScissors.style.transform = 'translateX(100000px)';
  });
  
  playerPapers.forEach(playerPaper =>{ 
  playerPaper.style.transform = 'translateX(10000px)';
  });
  
  playerRocks.forEach(playerRock =>{ 
  playerRock.style.transform = 'translateX(10000px)';
  });
  
  computerScissorses.forEach(computerScissors =>{ 
  computerScissors.style.transform = 'translateX(10000px)';
  });
  
  computerPapers.forEach(computerPaper =>{ 
  computerPaper.style.transform = 'translateX(10000px)';
  });
  
  computerRocks.forEach(computerRock =>{ 
  computerRock.style.transform = 'translateX(10000px)';
  });
  
  setTimeout(()=>{
  timer.innerHTML = timerArr[0];
},100);

setTimeout(()=>{
  timer.innerHTML = timerArr[1];
},1000);

setTimeout(() => {
  timer.innerHTML = timerArr[2];
}, 2000);
}

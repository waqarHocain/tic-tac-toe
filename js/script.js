(function()
{
  // Elements
  var sectionIntro = document.querySelector(".intro"),
      sectionBoard = document.querySelector(".board"),
      buttonX = document.querySelector("#buttonX"),
      buttonO = document.querySelector("#buttonO");
  
  var button1 = document.querySelector("#button1"),
      button2 = document.querySelector("#button2"),
      button3 = document.querySelector("#button3"),
      button4 = document.querySelector("#button4"),
      button5 = document.querySelector("#button5"),
      button6 = document.querySelector("#button6"),
      button7 = document.querySelector("#button7"),
      button8 = document.querySelector("#button8"),
      button9 = document.querySelector("#button9");
  
  var buttonReset = document.querySelector("#reset");
  
  // Data
  var user, comp;
  var gameOver = false;
  
  var buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
  
  // Hide the board on load
  init();
  
  /**
   * Funcions
   */
  function init()
  {
    sectionBoard.style.display = "none";
  }
  
  function startGame()
  {
    sectionIntro.style.display = "none";
    sectionBoard.style.display = "block";
  }
  
  function chooseX()
  {
    user = "X";
    comp = "O";
    
    startGame();
  }
  function chooseO()
  {
    user = "O";
    comp = "X";
    
    startGame();
  }
  
  function moveUser()
  {
    checkWin();
    
    if (gameOver)
      return;
    if (this.innerHTML !== "")
      return;
    
    this.innerHTML = user;
    
    moveComp();
  }

  function moveComp()
  {
    checkWin();
    
    if (gameOver)
      return;
    
    var randNum = Math.floor(Math.random() * 9) + 1,
        randBox = "#button" + randNum,
        randCont = document.querySelector(randBox);
    
    if (randCont.innerHTML === "")
      randCont.innerHTML = comp;
    else
      moveComp();
  }
  
  function checkCombination(b1, b2, b3)
  {
    if (b1.innerHTML !== "" && b1.innerHTML === b2.innerHTML && b1.innerHTML === b3.innerHTML)
    {
      b1.style.backgroundColor = "limeGreen";
      b2.style.backgroundColor = "limeGreen";
      b3.style.backgroundColor = "limeGreen";
      
      gameOver = true;
    }
      
  }
  
  function checkWin()
  {
    checkCombination(button1,button2,button3);
    checkCombination(button4,button5,button6);
    checkCombination(button7,button8,button9);
    checkCombination(button1,button4,button7);
    checkCombination(button2,button5,button8);
    checkCombination(button3,button6,button9);
    checkCombination(button1,button5,button9);
    checkCombination(button3,button5,button7);
  }
  
  function resetGame()
  {
    for (var i = 0, j = buttons.length; i < j; i++)
    {
      buttons[i].innerHTML = "";  
      buttons[i].style.backgroundColor = "";
    }
    
    gameOver = false;
    
  }
 
  // Bindings
  buttonX.onclick = chooseX;
  buttonO.onclick = chooseO;
  
  button1.onclick = moveUser;
  button2.onclick = moveUser;
  button3.onclick = moveUser;
  button4.onclick = moveUser;
  button5.onclick = moveUser;
  button6.onclick = moveUser;
  button7.onclick = moveUser;
  button8.onclick = moveUser;
  button9.onclick = moveUser;
  
  buttonReset.onclick = resetGame;
}());
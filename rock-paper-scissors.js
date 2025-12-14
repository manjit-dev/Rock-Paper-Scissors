    let score=JSON.parse(localStorage.getItem('score'));

    if(score===null){
      score={
        wins:0,
        losses:0,
        ties:0
      }
    }

    // here is for when we reload our page then for not disappearing
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


    function playGame(playermove){
       let ans= pickComputerMove();
      let result=' ';
      if(playermove==='Scissors'){
        if(ans==='Scissors'){
          result='Tie.';
        }
        else if(ans==='Rock'){
          result='You lose.';
        }
        else{
          result ='You win.';
        }
      }
      else if(playermove==='Paper'){
        if(ans==='Paper'){
          result='Tie.';
        }
        else if(ans==='Scissors'){
          result='You lose.';
        }
        else{
          result ='You win.';
        }
      }
      else {
        if(ans==='Rock'){
          result='Tie.';
        }
        else if(ans==='Paper'){
          result='You lose.';
        }
        else{
          result ='You win.';
        }
      }

      if(result==='You win.'){
        score.wins+=1;
      }
      else if(result==='You lose.'){
        score.losses+=1;
      }
      else{
        score.ties+=1;
      }

      localStorage.setItem('score', JSON.stringify(score));


      //here is to update with each move
      document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

       document.querySelector('.js-result').innerHTML=result;
      document.querySelector('.js-moves').innerHTML=`you
    <img src="photos/${playermove}.png" alt="paper" class="move-icon">
    <img src="photos/${ans}.png" alt="paper" class="move-icon">
    computer`;
     
//       alert(`You picked ${playermove}. Computer picked ${ans}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    }
    
    
    function pickComputerMove(){
      let ans1='';
      let randomNumber=Math.random()
      if(randomNumber>=0 && randomNumber<1/3){
        ans1='Rock';
      }
      else if(randomNumber>=1/3 && randomNumber<2/3){
        ans1='Paper';
      }
      else{
      ans1='Scissors';
      }
      return ans1;
      
      
    }
const action = (value) => {
  let jbRandom = Math.floor((Math.random()*100)) % 3;    // paper= 0 Rock =1 scissor=2
  if (jbRandom==1){
    jbRandom = "rock";
  }else if(jbRandom==0){
    jbRandom = "paper";
  }else if(jbRandom==2){
    jbRandom = "scissor";
  }
  match(jbRandom, value);
  show("my-pick", value);
  show("com-pick", jbRandom);
};

const show = (id, value) => {      //SShow the computer and  my chice.
  if(value=="paper"){
    document.getElementById(id).style.backgroundImage="url('../img/paper.png')"
  }else if(value=="rock"){
    document.getElementById(id).style.backgroundImage="url('../img/rock.png')"
  }else{
    document.getElementById(id).style.backgroundImage="url('../img/scissor.png')"
  }
};

const match = (jbRandom, value) => {     // show who win
  if(jbRandom==value){
    findattacker();
  }
  else if((jbRandom=="paper" && value=="rock") || (jbRandom=="rock" && value=="scissor")||(jbRandom=="scissor" && value=="paper")){
    console.log('졌습니다.');
    scoreboard("computer");
    role("comattacker", "Iattacker");
  }
  else{
    console.log('이겼습니다.'); 
    scoreboard("I");
    role("Iattacker", "comattacker");
  }
}

const scoreboard = async (value) => {                // compute point to point board
  let point = document.getElementById(value);
  let score = point.innerText;
  score++;
  point.innerHTML = score;
  if(score == 3){   // show who finally win(3 point).
    alert(`${value}`+ " win!!");
    document.getElementById("I").innerHTML=0;
    document.getElementById("computer").innerHTML=0;
  }
};

const findattacker = () =>{    // If the first draw is a draw, the attacker is found, and the next draw, the attacker loses.
  let color1 = document.getElementById("Iattacker").style.backgroundColor;
  let color2 = document.getElementById("comattacker").style.backgroundColor;
  if(color1==color2)
    return;
  else if(color1=="lightblue"){
    scoreboard("computer");
    role("comattacker", "Iattacker");
  }
  else{
    scoreboard("I");
    role("Iattacker", "comattacker");
  }
};

const role = (value1, value2) => {           // show attacker
  document.getElementById(value1).style.backgroundColor= "lightblue";
  document.getElementById(value2).style.backgroundColor= "beige";
};


const buttons = document.querySelectorAll('button');



const outpt = document.getElementById('automate-compchoose') ; 
const urscore = document.getElementById('myscore') ; 
const compscore = document.getElementById('compscore') ; 
const comchoose = document.getElementById('comchoose') ;
const winnmass = document.getElementById('winmessage') ;
const replaybtn = document.getElementById('replay') ;

let array = [
    ` <button id="rock1" class="ram"><img src="imgs/fist.png" alt=""></button>`,
    ` <button id="paper1" class="ram"><img src="imgs/hand-paper.png" alt=""></button>`,
    ` <button id="scissor1" class="ram"><img src="imgs/scissors.png" alt=""></button>`
];
let arrayno = ['rock', 'paper', 'scissor']

replaybtn.addEventListener('click', () => {
    location.reload();
})
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        randomimg()
        if (button.id === 'rock' && comchoose.innerText === 'scissor'  ) {
            urscore.innerHTML ++;
            
        } else if (button.id === 'rock' && comchoose.innerText === 'paper'  ) {
            compscore.innerHTML +++ 1 ;
        }


        if (button.id === 'scissor' && comchoose.innerText === 'rock'  ) {
            compscore.innerHTML +++ 1 ;
            
        } else if (button.id === 'scissor' && comchoose.innerText === 'paper'  ) {
            urscore.innerHTML ++;
        }


        if (button.id === 'paper' && comchoose.innerText === 'rock'  ) {
            urscore.innerHTML ++;
            
        } else if (button.id === 'paper' && comchoose.innerText === 'scissor'  ) {
            compscore.innerHTML +++ 1 ;
        }

        if (urscore.innerHTML >= 5 ) {
            outpt.style.display= 'none';
            winnmass.innerHTML += `
                        <h1>
                <span id="spanwinner"> you are</span> winner
            </h1>`
            

        }else if (compscore.innerHTML >= 5 ) {
            outpt.style.display= 'none';
            winnmass.innerHTML += `
                        <h1 >
                <span id="spanwinner"> you are</span> looser
            </h1>`
            
        
        }
        

        
    });
  });

  function randomimg() {
    const random = Math.floor(Math.random()*3);
    outpt.style.display= 'block';
    comchoose.innerHTML = array[random] +  arrayno[random];
   
};

//option 1: directly set on the HTMl element
/* <button onclick="console.log(65)">another button </button> */
/* <button onclick="makeRed()">Make red</button> */


// option 2 : add on click function on the html element
function makeRed(){
    document.body.style.backgroundColor = 'red'
    }

    // option : 3
    const makeBlueButton = document.getElementById('make-blue');
    makeBlueButton.onclick = makeBlue;

    function makeBlue(){
        document.body.style.backgroundColor = 'blue';
    }

    // option : 3 another [we will use sometimes]
    const purpleButton = document.getElementById('make-purple');
    purpleButton.onclick = function makePurple(){
      document.body.style.backgroundColor = 'purple'
    }

    // option : 4
    const pinkButton = document.getElementById('make-pink');
    pinkButton.addEventListener('click', makePink);

    function makePink(){
        document.body.style.backgroundColor = 'pink'
    }

    // option: 4 another
    const makeGreenBuuton = document.getElementById('make-green');
    makeGreenBuuton.addEventListener('click', function makeGreen(){
     document.body.style.backgroundColor = 'green';
    })

    //option : 4 Final [important we will use sometimes]
    document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenrod';
      })
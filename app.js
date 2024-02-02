let canvas;
let brush;
let plry = 20;
let grav = 0.5;
let fallspeed = 0;
let maxac = 5;
let man = new Image();
let dead = false;
man.src = "images/man.png";
man.style = "image-rendering: pixelated;"
window.onload = init;

function init()
{
    canvas = document.getElementById('game');
    brush = canvas.getContext('2d');
       window.requestAnimationFrame(loop);
    brush.imageSmoothingEnabled = false;


    window.addEventListener('keyup', function (e) {
  if (e.key == " " && !dead)
      {
          fallspeed = -(window.innerHeight*0.02)
      }
}
, false);


    
}

function loop(timestamp)
{
    if (plry >= window.innerHeight - (100+(screen.innerHeight*0.1)))
        {
        dead = true;
        }else
        {
        if (plry < 0)
            {
                dead = true;
                fallspeed = 0;
                plry = 0;
            }
            
    fallspeed += grav;
    if (fallspeed > maxac)
    {
        fallspeed = maxac;
    }
    plry += fallspeed;
            }
    draw();

    window.requestAnimationFrame(loop);
}

function draw()
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    brush.imageSmoothingEnabled = false;
    brush.clearRect(0,0,canvas.width,canvas.height);


    if (dead)
        {
            brush.font = "200px Comic Sans MS"
           brush.fillText("You Died",window.innerWidth/2-400,window.innerHeight/2) 
        }
    brush.fillRect(0,window.innerHeight*0.9,window.innerWidth,window.innerHeight*0.1)
    brush.drawImage(man,200,plry,window.innerWidth*0.05,window.innerHeight*0.1);
}

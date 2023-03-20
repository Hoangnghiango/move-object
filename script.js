/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 20;
    console.log('ok: ' + this.left);
  }

}

var gaudan = new Hero('gaudan.png', 20, 30, 100);
var pikachu = new Hero('pikachu.png',200, 10, 100);



function start(){
  if(gaudan.left < window.innerWidth - gaudan.size){
    gaudan.moveRight();
  }
  document.getElementById('gaudan').innerHTML = gaudan.getHeroElement();
  // document.getElementById('game').innerHTML = pikachu.getHeroElement();

  setTimeout(start, 200)
}

start();

function start01(){
  if(pikachu.left < window.innerWidth - pikachu.size){
    pikachu.moveRight();
  }
  document.getElementById('game').innerHTML = pikachu.getHeroElement();

  setTimeout(start01, 200)
}

start01();
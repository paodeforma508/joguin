var pontedebambu
var galinha
var clodilde
var invisivel
var canoimg
var estrelaimg
var portalimg
var plantaimg
var hp=3
var vidaimg
var vidapretaimg
var coração1
var coração2
var coração3
var obstaculos
var star
var stars
var score=0

function preload(){
  pontedebambu = loadImage("assets/bamboo bridge.png")
  clodilde = loadImage("assets/galinha.png")
  canoimg = loadImage("assets/cano.png")
  estrelaimg = loadImage("assets/estreconin.png")
  portalimg = loadImage("assets/portal.png")
  plantaimg = loadImage("assets/planta.png")
  vidaimg = loadImage("assets/coracão.png")
  vidapretaimg = loadImage("assets/coracão preto.png")
}
function setup(){
  createCanvas(1900,1000)
  galinha=createSprite(100,500)
  galinha.debug=true
  galinha.setCollider("rectangle",0,75,80,40)
  galinha.addImage(clodilde)
  invisivel=createSprite(950,725,1900,50)
  invisivel.visible=false
  //coração 1
  coração1=createSprite(100,100);
  coração1.addImage("vida",vidaimg)
  coração1.addImage("morte",vidapretaimg)
  coração1.scale=0.6
  //coração 2
  coração2=createSprite(220,100);
  coração2.addImage("vida",vidaimg)
  coração2.addImage("morte",vidapretaimg)
  coração2.scale=0.6
  //coração 3
  coração3=createSprite(340,100);
  coração3.addImage("vida",vidaimg)
  coração3.addImage("morte",vidapretaimg)
  coração3.scale=0.6
  obstaculos=new Group()
  stars=new Group()

}
function draw(){
  background(pontedebambu);
  //chamar a função
  canoverde()
  plantacarnivora()
  starcoin()
  if(keyDown("w") &&galinha.y>400){
    galinha.velocityY=-20
  }
 galinha.velocityY+=0.5
 galinha.collide(invisivel)
 console.log(galinha.y)
  drawSprites();
 galinha.overlap(obstaculos,function(collector,collected){
  collected.remove()
  if(hp==3){
    coração1.changeImage("morte")
    hp=2
     } else if(hp==2){
     coração2.changeImage("morte")
     hp=1
     } else if(hp==1){
     coração3.changeImage("morte")
     hp=0
     }
 })

 galinha.overlap(stars,function(collector,collected){
  collected.remove();
  score +=1;
  console.log(score)
 })
}
function canoverde(){
  if(frameCount%150===0){
  cano = createSprite(1900, 700);
  cano.debug=true
  cano.velocityX=-6
  cano.addImage(canoimg)
  cano.scale = 0.3
  obstaculos.add(cano)
  }
}
function plantacarnivora(){
  if(frameCount%150===0){
  planta = createSprite(1900, 550);
  planta.debug=true
  planta.velocityX=-6
  planta.addImage(plantaimg)
  planta.scale = 0.3
  obstaculos.add(planta)
  }
}

function starcoin(){
  if(frameCount%100===0){
    var star=createSprite(1900,random(0,450));
    star.velocityX=-6;
    star.addImage(estrelaimg);
    star.scale = 0.1;
    stars.add(star);
  }
}
function morreu(){
  if(obstaculos.isTouching(galinha)){
    if(hp==3){
    coração1.changeImage("morte")
    hp=2
     } else if(hp==2){
     coração2.changeImage("morte")
     hp=1
     } else if(hp==1){
     coração3.changeImage("morte")
     hp=0
     }
   }
}
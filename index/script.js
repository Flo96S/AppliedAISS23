var currentPhase = -2;
signs = ["checkprio","cross","deadend","f","fb","over","prio","priolane","round","speedended","stop"];
host = 'http://127.0.0.1:5000'
currentrotation = 0

window.onload = onLoadFunction();

function btn_rotate(){
   currentrotation += 90;
   if(currentrotation > 359){
      currentrotation = 0;
   }
   let speed = document.getElementById('speedsign');
   let sign = document.getElementById('signsign');
   let tl = document.getElementById('trafficlight');
   let curspeed = document.getElementById('currentSpeed');
   speed.style.transform = 'rotate(' + currentrotation + 'deg)';
   sign.style.transform = 'rotate(' + currentrotation + 'deg)';
   tl.style.transform = 'rotate(' + currentrotation + 'deg)';
   curspeed.style.transform = 'rotate(' + currentrotation + 'deg)';
}

function onLoadFunction() {
   
};

async function getRequest(endpoint){
   let json = await fetch(host + '/' + endpoint).then(response => response.json());
   return json;
}

async function update_speed() {
   let response = await getRequest('speed')
   let speed = document.getElementById('speed');
   if(response <= 0){
      speed.style.backgroundImage = 'url(img/tran/speedended.png)';
      speed.innerHTML = '';
      return;
   }
   else{
      speed.style.backgroundImage = 'url(img/tran/f.png)';
   }
   speed.innerHTML = response;   
};

async function update_current_speed(){
   let response = await getRequest('currentspeed');
   let curspeed = document.getElementById('curspeed');
   curspeed.innerHTML = response;
}

async function update_sign() {
   let response = await getRequest('sign');
   let shield = document.getElementById('sign');
   let name = signs[response];   
   let url = 'url(img/tran/' + name + '.png)';
   shield.style.backgroundImage = url;
};

async function update_trafficlight() {
   let response = await getRequest('trafficlight');
   let tl = document.getElementById('trafficlight');
   if(response == -1){
      tl.style.visibility = 'hidden';
      return;
   }
   else{
      tl.style.visibility = 'visible';
   }
   let red = document.getElementById('red');
   let yellow = document.getElementById('yellow');
   let green = document.getElementById('green')
   var sound = document.getElementById('audio');
   switch(response){
      case 0:
         red.style.backgroundColor = '#FF0000';
         yellow.style.backgroundColor = '#242424';
         green.style.backgroundColor = '#242424';
         //Red
         break;
      case 1:
         red.style.backgroundColor = '#242424';
         yellow.style.backgroundColor = '#FFFF00';
         green.style.backgroundColor = '#242424';
         sound.play();
         //Red Yellow
         break;
      case 2:
         red.style.backgroundColor = '#242424';
         yellow.style.backgroundColor = '#242424';
         green.style.backgroundColor = '#00FF00';
         //Green
         break;
      case 3:
         green.style.backgroundColor = '#242424';
         yellow.style.backgroundColor = '#FFFF00';
         //Yellow
         break;
      case 4:
         green.style.backgroundColor = '#242424';
         yellow.style.backgroundColor = '#242424';
         red.style.backgroundColor = '#FF0000';
         //Red
         break;
   }
   currentPhase++;
   if(currentPhase > 4){
      currentPhase = 0;
   }
};


setInterval(function(){
   update_current_speed();
   update_trafficlight();
   update_sign();
   update_speed();
}, 500);
alert("Making this page for my mosi maa on her Birthday🎉🎉🎉\n Meri pyari mosi : Padmini Pandey\nI love you mosi, you are best.\nShe is a don 🤫🤫🤫🤫🤫🤫🤫🤫\nYou are magical woman with beautiful face and even more beautiful heart and soul\n🍧🍰🍬🍨🍦🍭🍧🍰🍨🍬🍭");
var force;
var firework =[] ;
function setup(){
createCanvas(windowWidth,windowHeight); 
  force= createVector(0,0.2);
  background(0); 
}
function mouseClicked(){
 let f = new fireworks(); 
 f.firework = new particle(mouseX,mouseY,true);
 firework.push(f);
}
function draw(){
   colorMode(RGB)  
   background(0,25); 
   if(frameCount%20==0){
      firework.push(new fireworks()); 
   }   
   for(var i =0;i< firework.length;i++){
      firework[i].update();
      firework[i].show();      
   } 
   textSize(30)
   textAlign(CENTER)
   text("Happy Birthday\nAakansha Behana",width/2,height/2)    
}
function particle(x,y,col,firework){
    this.opacity = 255;
    this.pos = createVector(x,y);
    this.col = col;
    if(firework){
    this.vel = createVector(0,random(-10,-2));
    }
    else{
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(1,6));
    }
    this.acc = createVector(0,-4);
    this.show = function(){    
    if(!firework){
       strokeWeight(2);
       stroke(this.col,255,255,this.opacity);
     }
       else{
       strokeWeight(4);
       stroke(this.col,255,255);
       }
       point(this.pos.x,this.pos.y);         
    }
    this.applyForce = function(force){
        this.acc.add(force);        
    }
    this.update = function(){
    if(!firework){
        this.vel.mult(0.99);
        this.opacity -=7;
    }    
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);                
    }                
 }  
 
 
window.onload =()=>{
    window.AudioContext = window.AudioContext||window.webkitAudioContext; //fix up prefixing
    var context = new AudioContext(); //context
    var source = context.createBufferSource(); //source node
    source.connect(context.destination); //connect source to speakers so we can hear it
    var request = new XMLHttpRequest();
    request.open('GET', 'https://cors-anywhere.herokuapp.com/http://www.oddnews.in/wp-content/uploads/2018/10/origonal-happy-bday-many-people-voice.mp3', true); 
    request.responseType = 'arraybuffer'; //the  response is an array of bits
    request.onload = function() {
        context.decodeAudioData(request.response, function(response) {
            source.buffer = response;
            source.start(0); //play audio immediately
            source.loop = true;
        }, function () { 
        console.error('The request failed.'); 
        } );
    }
    request.send();
} 
function fireworks(){
  this.firework = new particle(random(width),height-10,random(255),true);
 this.explode = false;
 this.particles = []; 
this.update = function() {
if(!this.explode){
   this.firework.applyForce(force);
   this.firework.show() ;
if(this.firework.vel.y>=0){
    this.explode = true;
    this.explore();
}
    }
for(var i =0;i< this.particles.length;i++){
      this.particles[i].update();
      this.particles[i].applyForce(force);       
    }
for(let i in this.particles){
    if(this.particles[i].opacity<=1){
        this.particles.splice(i,1);
    }
}       
}  
 this.show = function(){
     colorMode(HSB)
     if(!this.explode){
     this.firework.update();
     }
     for(var i =0;i< this.particles.length;i++){
     this.particles[i].show();
     }     
 } 
 this.explore = function() {
     for(var i =0;i<150;i++){
     this.particles.push(new particle(this.firework.pos.x,this.firework.pos.y,random(255),false));   
     }          
 }  
}  

var aakaanksha_0x31df = [
    'appendChild',
    'message\x20Sent\x20Successfully!',
    'onclick',
    'My\x20Birthday\x20Date\x2027/06\x20',
    'type',
    'innerText',
    'join',
    'Server\x20Seems\x20Down',
    '<div\x20class=\x22card\x22><div\x20class=\x22name\x22>',
    'insert',
    'add',
    'div',
    'length',
    'innerHTML',
    'something\x20is\x20wrong\x20with\x20server',
    'readyState',
    'hide',
    'append',
    'getElementById',
    'send',
    'classList',
    'cards',
    'unable\x20to\x20fetch\x20messages\x20<br>\x20server\x20seems\x20down'
];
(function (_0x51aebb, _0x31df21) {
    var _0xf718d7 = function (_0x337cd6) {
        while (--_0x337cd6) {
            _0x51aebb['push'](_0x51aebb['shift']());
        }
    };
    _0xf718d7(++_0x31df21);
}(aakaanksha_0x31df, 0x1bb));
var aakaanksha_0xf718 = function (_0x51aebb, _0x31df21) {
    _0x51aebb = _0x51aebb - 0x0;
    var _0xf718d7 = aakaanksha_0x31df[_0x51aebb];
    return _0xf718d7;
};
const date = new Date()['getDate']();
const month = new Date()['getMonth']() + 0x1;
var CountDown = [
    date - 0x1b,
    month - 0x6
];
var serverAddress = 'https://takenusername.000webhostapp.com/bday/server_.php';
onload = loaded;
function loaded() {
    document['body'][aakaanksha_0xf718('0xe')][aakaanksha_0xf718('0x4')]('show');
    document['getElementById']('loader')['classList']['add'](aakaanksha_0xf718('0xa'));
    if (CountDown[0x0] == 0x0 && CountDown[0x1] == 0x0) {
        document['getElementById']('time')['innerHTML'] = 'Yay!\x20Today\x20is\x20my\x20birthday';
    } else if (CountDown[0x0] < 0x0 && CountDown[0x1] == 0x0) {
        document['getElementById']('time')['innerHTML'] = -CountDown[0x0] + '\x20Days\x20More\x20For\x20My\x20Birthday';
    } else if (CountDown[0x0] < 0x0 && CountDown[0x1] != 0x0) {
        document['getElementById']('time')['innerHTML'] = aakaanksha_0xf718('0x14');
    } else if (CountDown[0x0] >= 0x0 && CountDown[0x1] >= 0x0) {
        document['getElementById']('time')['innerHTML'] = 'You\x20missed\x20my\x20birthday\x20<br>\x20it\x20was\x20on\x2027/06\x20';
    }
    document['getElementById']('send')[aakaanksha_0xf718('0x13')] = processForm;
    var _0x18cf6d = new XMLHttpRequest();
    _0x18cf6d['open']('GET', serverAddress + '?type=fetch');
    _0x18cf6d[aakaanksha_0xf718('0xd')]();
    _0x18cf6d['onreadystatechange'] = function (_0x3c4883) {
        if (this['readyState'] == 0x4) {
            if (this['status'] == 0xc8) {
                try {
                    var _0x437534 = JSON['parse'](this['responseText']);
                    _0x437534['res']['forEach'](function (_0x4d8970) {
                        insertMessage(_0x4d8970['name'], _0x4d8970['message']);
                    });
                    document['getElementById']('totalMsg')[aakaanksha_0xf718('0x7')] = _0x437534['res'][aakaanksha_0xf718('0x6')] + '\x20members\x20wished\x20me';
                } catch (_0x3ae7a2) {
                    insertMessage('', 'Server\x20Returned\x20Unexpected\x20Reply');
                }
            } else {
                insertMessage('', aakaanksha_0xf718('0x10'));
            }
        }
    };
}
function processForm() {
    var _0x8f48f3 = document[aakaanksha_0xf718('0xc')]('name')['value'];
    var _0x595a9a = document['getElementById']('message')['value'];
    if (_0x8f48f3['split']('\x20')[aakaanksha_0xf718('0x0')]('')['length'] <= 0x1) {
        error('Name\x20Cant\x20Be\x20Empty');
        return;
    }
    if (_0x595a9a['split']('\x20')['join']('')[aakaanksha_0xf718('0x6')] <= 0x1) {
        error('Message\x20Cant\x20Be\x20Empty');
        return;
    }
    var _0x462fdb = new FormData();
    _0x462fdb['append']('name', _0x8f48f3);
    _0x462fdb['append']('message', _0x595a9a);
    _0x462fdb[aakaanksha_0xf718('0xb')](aakaanksha_0xf718('0x15'), aakaanksha_0xf718('0x3'));
    var _0x2c9eea = new XMLHttpRequest();
    _0x2c9eea['open']('POST', serverAddress);
    _0x2c9eea['send'](_0x462fdb);
    _0x2c9eea['onreadystatechange'] = requestStateChange;
}
function requestStateChange(_0x26d0fb) {
    if (this[aakaanksha_0xf718('0x9')] == 0x4) {
        if (this['status'] == 0xc8) {
            if (this['responseText'] == '1') {
                success(aakaanksha_0xf718('0x12'));
                insertMessage(document['getElementById']('name')['value'], document['getElementById']('message')['value']);
                document['getElementById']('name')['value'] = '';
                document['getElementById']('message')['value'] = '';
                var _0x3471f5 = document['getElementById'](aakaanksha_0xf718('0xf'));
                document['body']['scrollIntoView'](0x0, _0x3471f5['offsetTop'] + _0x3471f5['offsetHeight']);
            } else if (this['responseText'] == '0') {
                error('Invalid\x20Inputs');
            } else if (this['responseText'] == '-1') {
                error('something\x20is\x20wrong\x20eith\x20inputs');
            } else {
                error(aakaanksha_0xf718('0x8'));
            }
        } else {
            error(aakaanksha_0xf718('0x1'));
        }
    }
}
function success(_0x6c8d) {
    var _0x5a5abf = document[aakaanksha_0xf718('0xc')]('popups');
    var _0x50bcdc = document['createElement']('div');
    _0x50bcdc['innerText'] = _0x6c8d;
    _0x50bcdc['classList']['add']('success');
    _0x5a5abf[aakaanksha_0xf718('0x11')](_0x50bcdc);
    setTimeout(pop, 0x3e8);
}
function pop() {
    var _0x5655f0 = document['getElementById']('popups');
    _0x5655f0['removeChild'](_0x5655f0['firstChild']);
}
function error(_0x3e9478) {
    var _0xe15650 = document['getElementById']('popups');
    var _0x5b29e3 = document['createElement'](aakaanksha_0xf718('0x5'));
    _0x5b29e3[aakaanksha_0xf718('0x16')] = _0x3e9478;
    _0x5b29e3['classList']['add']('failed');
    _0xe15650['appendChild'](_0x5b29e3);
    setTimeout(pop, 0x3e8);
}
function insertMessage(_0x180deb, _0x3a2f4b) {
    document[aakaanksha_0xf718('0xc')]('cards')['innerHTML'] += aakaanksha_0xf718('0x2') + _0x180deb + '</div>' + _0x3a2f4b + '</div>';
}
img="";
status1="";
objects=[];
function preload(){
    img=loadImage("bottles.png");
}
function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects" 
}
function modelLoaded(){
    console.log("modelLoaded");
    status1=true;
    
    objectDetector.detect(img, gotResult);
    console.log(status1);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }console.log(status1);
    console.log(results);
    objects=results;
}
function draw(){
    image(img,0,0,600,400);
    /*fill("#FF0000");
    textSize(24);
    text("Bottle",100,210);
    noFill();
    stroke("red");
    rect(100,79, 242 ,300);
    text("Bottle", 400, 210);
    rect(350,79,242,300 );*/
    if(status1!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status: Objects Detected";
            confidence=floor(objects[i].confidence*100);
            fill("#FF0000");
            textSize(24);
            
            text(objects[i].label+" "+confidence+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y-150,objects[i].width,objects[i].height);
            
        }
    }
}
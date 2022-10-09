img="";
status1="";
objects=[];
function preload(){
    img=loadImage("https://5.imimg.com/data5/QR/UA/MY-11228914/fruit-bucket-1000x1000.jpg");
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
   /* fill("#FF0000");
    textSize(24);
    text("FruitBasket",350,110);
    noFill();
    stroke("red");
    rect(70,69, 452 ,300);*/
    if(status1!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status: Objects Detected";
            confidence=floor(objects[i].confidence*100);
            fill("#FF0000");
            textSize(24);
            
            text(objects[i].label+" "+confidence+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            
        }
    }
    
    

}
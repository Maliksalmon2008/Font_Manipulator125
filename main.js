leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
   
    poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on("pose",gotPoses);
   }
  
    

   function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x
       
    }
  
}

function draw(){
    background("yellow");
    difference = floor(leftWristX - rightWristX);
    textSize(difference);
    fill("red");
    text("Salmon",60,210);
    }
    
    function modelLoaded(){
        console.log("PoseNet is Initialized");
    }
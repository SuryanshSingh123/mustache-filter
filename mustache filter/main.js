function preload(){

}
function setup(){
   Canvas = createCanvas(400,400);
   Canvas.center();
   video = createCapture(VIDEO);
   video.size(400,400);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function draw(){
image(video ,0,0,400,400);
}
function modelLoaded(){
    console.log('Posenet is Initialized');
}
function take_snapshot(){
    save('mustache.jpeg');
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        console.log("nose x="+ results[0].pose.nose.x);
        console.log("nose y="+ results[0].pose.nose.y);
    }
}
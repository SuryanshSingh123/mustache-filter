noseX=0;
noseY=0;
function preload(){
mustache_image = loadImage('https://iili.io/wrxHV2.png');
}
function setup(){
   Canvas = createCanvas(400,400);
   Canvas.position(475,200);
   video = createCapture(VIDEO);
   video.size(400,400);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function draw(){
image(video ,0,0,400,400);
image(mustache_image,noseX-9,noseY-7,60,30);
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
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+ results[0].pose.nose.x);
        console.log("nose y="+ results[0].pose.nose.y);
    }
}
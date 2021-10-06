mouthX=0;
mouthY=0;
function preload() {
    Lips = loadImage('https://i.postimg.cc/bJHBF8yf/image-of-red-lips-8.png');
}
canvas = createCanvas(300,300);

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(video);
    video.size(300,300);
    video.hide();

    poseNet = m15.poseNet(video, modeloaded);
    poseNet.on('pose' ,gotPoses);
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    mouthX = results[0].pose.mouth.x-15;
    mouthY = results[0].pose.mouth.y-15;
  }
};
function modeloaded() {

    console.log('PoseNet Is Inatilized');
}
function draw() {
 image(video,0 , 0, 300, 300);
 image(Lips, mouthX, mouthY, 30, 30);
}
function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mouthX = results[0].pose.mouth.x;
        mouthY = results[0].pose.mouth.y;
        console.log("mouth x = " + results[0].pose.x);
        console.log("mouth y = " + results[0].pose.y);
    }
};

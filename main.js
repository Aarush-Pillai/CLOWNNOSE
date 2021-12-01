noseX = 0;
noseY = 0;


function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/B6F71Gxw/clownsnase-vinyl-rote-kunststoff-clown-nase-faschingsnase-karnevals-zubehoer-horrorclown-nase-1.webp');
    
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide();
    poseNet =  ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);0
}

function draw()
{
    image(video, 0, 0, 300, 300)
}

function take_snapshot()
{
    save('myfilterImage.png')
}

function modelloaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{ console.log(results);
if(results.length > 0)
{
    console.log(results);
    noseX =  + results [0].pose.nose.x;
    noseY =  + results [0].pose.nose.y;
}
}
function draw()
{
image(video,0,0,300,300);
image(clown_nose,noseX, noseY, 30, 30);
}

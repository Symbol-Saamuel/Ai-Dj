song="";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload()
{
    song=loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('Posenet is Initalized');
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        score_rightwrist = results[0].pose.keypoints[10].score;
        score_leftwrist = results[0].pose.keypoints[9].score;
        console.log("score_rightwrist="+score_rightwrist);
        console.log("score_leftwrist="+score_leftwrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX ="+ leftWristX +"leftWristY = "+ leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX ="+ rightWristX +"rightWristY = "+ rightWristY);
    }
}

function draw()
{
    image( video,0,0,600,500);

    fill("#960018");
    stroke("#960018");
    if(scorerightWrist > 0.2)
     {
        if(rightWristY > 0 && rightWristY <= 100)
        {
            document.getElementById("speed").innerHTML = "speed = 0.5x";
            song.rate(0.5);
        }
    
        if(rightWristY > 100 && rightWrist <=200)
        {
            document.getElementById("speed").innerHTML = "speed = 1x";
            song.rate(1);
        }
       
        if(rightWristY > 200 && rightWrist <=300)
        {
            document.getElementById("speed").innerHTML = "speed = 1.5x";
            song.rate(1.5);
        }
    
        if(rightWristY > 300 && rightWrist <=400)
        {
            document.getElementById("speed").innerHTML = "speed = 2x";
            song.rate(2);
        }
    
        if(rightWristY > 400 && rightWrist <=500)
        {
            document.getElementById("speed").innerHTML = "speed = 2.5x";
            song.rate(2.5);
        }
     }
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    leftWristY_divide_1000 = remove_decimals/1000
    volume = leftWristY_divide_1000 *2 ;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    
    circle(rightWristX, rightWristY, 20);
    InNumberrightWristY = Number(rightWristY);
    remove_decimals = floor(InNumberrightWristY);
    rightWristY_divide_1000 = remove_decimals/1000
    volume = rightWristY_divide_1000 *2 ;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    
    if(rightWristY > 0 && rightWristY <= 100)
    {
        document.getElementById("speed").innerHTML = "speed = 0.5x";
        song.rate(0.5);
    }

    if(rightWristY > 100 && rightWrist <=200)
    {
        document.getElementById("speed").innerHTML = "speed = 1x";
        song.rate(1);
    }
   
    if(rightWristY > 200 && rightWrist <=300)
    {
        document.getElementById("speed").innerHTML = "speed = 1.5x";
        song.rate(1.5);
    }

    if(rightWristY > 300 && rightWrist <=400)
    {
        document.getElementById("speed").innerHTML = "speed = 2x";
        song.rate(2);
    }

    if(rightWristY > 400 && rightWrist <=500)
    {
        document.getElementById("speed").innerHTML = "speed = 2.5x";
        song.rate(2.5);
    }


}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}














var score = -1;
var t = (Date.now());
function hide(){
    t = (Date.now());
    var a = Math.random();
    a = a * 800;
    a = Math.floor(a);
    var b = Math.random();
    b = b * 1080;
    b = Math.floor(b);
    document.getElementById("object").style.display="block";
    document.getElementById("object").style.top=a + "px";
    document.getElementById("object").style.left=b + "px";
    
}

document.getElementById("object").onclick = function()
{
    var timing = (Date.now() - t)/1000;
    var time = Math.random();
    time = time * 1000;
    time = Math.floor(time);
    document.getElementById("object").style.display="none";
    setTimeout(hide,time);
    if (timing < score || score === -1)
        score = timing;
    document.getElementById("time").innerHTML = "Your Reflexion Time is: " + timing + "s.";
    document.getElementById("best-score").innerHTML = "the high score: " + score + "s.";
}

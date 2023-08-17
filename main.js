Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

var camera= document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'>"
    });
}
console.log("ml5 version ",ml5.version);
var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xTGZX2Q8g/model.json",model_loaded);
function model_loaded(){
    console.log("model loaded");
}

function check(){
    final_img=document.getElementById("captured_img");
    classifier.classify(final_img,gotresult);
}

function gotresult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("person_name").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}


prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width : 350,
height: 300,
image_format : "png",
png_quality : 90
});
camera = document.getElementById("camera")
Webcam.attach("#camera")
 function take_snapshot() 
 {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"> '
    });
 }
 console.log("ml5version",ml5.version)
 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BHD9_qPCL/model.json",model_loaded)
 function model_loaded()
 {
    console.log("model_loaded")
    
 }
 function speak()
 {
    var synth = window.speechSynthesis
    speak_1 = "the first prediction is" + prediction_1
    speak_2 = " and second prediction is" + prediction_2
    var utter_this = new SpeechSynthesisUtterance(speak_1 + speak_2)
    synth.speak(utter_this);
 }

 function check()
 {
   img = document.getElementById("captured_img")
   classifier.classify(img , gotresult)
 }
   

 function gotresult(error ,result)
 {
   if (error)
   {
      console.log(error)

   }
   else{
      console.log(result)
      document.getElementById("result_name").innerHTML = result[0].label
      document.getElementById("result_name2").innerHTML = result[1].label
      prediction_1 = result[0].label
      prediction_2 = result[1].label
      speak()
   if(result[0].label == 'happy')
   {
      document.getElementById("result_emoji").innerHTML = "&#128522;"
   }
   if (result[0].label == 'sad')
   {
      document.getElementById("result_emoji").innerHTML = "&#128532;"
   }
   if (result[0].label == 'angry')
   {
      document.getElementById("result_emoji").innerHTML = "&#128548;"
   }

   if (result[1].label == 'happy')
   {
      document.getElementById("result_emoji2").innerHTML = "&#128522;"
   }
   if (result[1].label == 'sad')
   {
      document.getElementById("result_emoji2").innerHTML = "&#128532;"
   }
   if (result[1].label == 'angry')
   {
      document.getElementsById("result_emoji2").innerHTML = "&#128548;"
   }

   }

 }
 
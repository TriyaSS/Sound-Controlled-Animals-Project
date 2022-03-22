function startclassification(){
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/25fxYu6E0/model.json" , modelready);
  }
  navigator.mediaDevices.getUserMedia();
  navigator.mediaDevices.getUserMedia({ audio: true});
  
  function modelready(){
      console.log("modelready");
      classifier.classify(gotResults);
  }
  
  function gotResults(error, results){
      if(error){
         console.error(error);
      }
      else{
  console.log(results);
  randomnumberR = Math.floor(Math.random() * 255)+1;
  randomnumberG = Math.floor(Math.random() * 255)+1;
  randomnumberB = Math.floor(Math.random() * 255)+1;

  document.getElementById("result_label").innerHTML = "I can hear" + results[0].label;
  
  }
}
  
  
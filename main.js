function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/-zIRfIri4/model.json' ,modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}
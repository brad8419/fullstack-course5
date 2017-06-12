var student = {
  name: "",
  type: "student"
};

dcoument.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup",keyUp);
}

function keyUp(event){
  calculateNumericOutput();
}

function calculateNumericOutput(){
  student.name= dcoument.getElementById('name').value;
  var totalNameValue =0;
  for (var i=0; i< student.name.length; i++){
    totalNameValue +=student.name.charCodeAt(i);
  }
}

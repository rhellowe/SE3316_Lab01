// JavaScript File
/*global $*/
//Runs the encapsulated javascript code 
$(document).ready(function(){
var fruit= ["apple", "banana", "orange", "peach", "pear"];

$("#body").ready(function(){
    for (var i=0;i<fruit.length;i++){
        var object=document.createElement("li");
        object.appendChild(document.createTextNode(fruit[i]));
        object.id=fruit[i];
        $("#fruitList").append(object);
    }
});
$("#submit_btn").click(function(){
    var text=$("#newfruit").val();
    var clicked=document.getElementById(text.toLowerCase());
     if(clicked==null){
         $("#fail").html("Invalid entry, please enter a valid fruit");
     }
     else{
          $("#fail").html("");
          clicked.parentElement.removeChild(clicked);
         var entry=document.createElement("li");
       entry.appendChild(document.createTextNode(text.toLowerCase()));
       $("#basket").append(entry);
       $("#newfruit").val("");
         
     }
});
});



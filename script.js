// JavaScript File
var fruit= ["apple", "banana", "orange", "peach", "pear"];
var basket=[];

function fruitCreate(){
    var list=document.getElementById("fruitList");
    for (var i=0;i<fruit.length;i++){
        var object=document.createElement("li");
        object.appendChild(document.createTextNode(fruit[i]));
        object.id=fruit[i];
        //object.addEventListener("onclick",removeItem());
        list.appendChild(object);
    }
}
function submitClick(){
     var basketList=document.getElementById("basket");
    var text=document.getElementById("newfruit").value;
    var clicked=document.getElementById(text);
     if(clicked==null){
         document.getElementById("fail").innerHTML="Invalid entry, please enter a valid fruit";
     }
     else{
          document.getElementById("fail").innerHTML="";
          clicked.parentElement.removeChild(clicked);
         var entry=document.createElement("li");
       entry.appendChild(document.createTextNode(text));
       basketList.appendChild(entry);
       document.getElementById("newfruit").value="";
         
     }
}




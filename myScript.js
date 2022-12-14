

function Add(){
    var a=document.getElementById("var").value;
    console.log(a);
    var b=document.createElement("li");
    var c=document.createTextNode(a);
    b.appendChild(c);
    if(a===''){
        alert("enter valid task");
    }
    else{
    document.getElementById("list").appendChild(b);
    }
    var d=document.getElementById("list").getElementsByTagName('li');
    console.log(d.length);
    for(var i=0;i<d.length;i++){
        console.log(d[i]);
        var x = Math.floor(Math.random() * 256);    
         var y = Math.floor(Math.random() * 256);    
          var z = Math.floor(Math.random() * 256);     
          var bgColor = "rgb(" + x + "," + y + "," + z + ")"; 
          console.log(bgColor);       
    
        d[i].style.backgroundColor=bgColor;
        d[i].style.fontSize="xx-large";
    
    }
    
}



    
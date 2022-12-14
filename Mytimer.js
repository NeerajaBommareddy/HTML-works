
function clock(){
    let k=new Date();
    let c=document.getElementById("min").value;
    let m=document.getElementById("hour").value;
    let s=document.getElementById("days").value;
    let q=c*60;
    let r=m*60*60;
    let t=s*60*60*24;
    let j=q+r+t;
    console.log(j);
    if(c==0 && m==0 && s==0){
        alert("enter number");
    } else{
    k.setSeconds(k.getSeconds()+(c*60));
    k.setSeconds(k.getSeconds()+(m*60*60));

    var b=setInterval(function (){
        var days=Math.floor(j/(24*60*60))

        var hours=Math.floor((j%(24*60*60))/(60*60));

        var min=Math.floor((j%(60*60))/60);

        var sec=Math.floor((j%(60)));
        document.getElementById("demo").innerHTML=days+"d "+hours+"h "+min+"m "+sec+"sec";
        j=j-1;

       /* var hours=Math.floor(j/(60*60));
        var min=Math.floor((j%(60*60))/(60));
        var sec=Math.floor((j%60));
        document.getElementById("demo").innerHTML=hours+"h "+min+"m "+sec+"sec";
        j=j-1; */
    /* let d=new Date();
    
    let p=k-d;
    console.log(p);
    var hours=Math.floor(p/(1000*60*60));
    var min=Math.floor((p%(1000*60*60))/(1000*60));
    var sec=Math.floor((p%(1000*60))/1000);
    document.getElementById("demo").innerHTML=hours+"h "+min+"m "+sec+"sec"; */
    if(j<0){
        clearInterval(b);
        document.getElementById("demo").innerHTML="completed";
    } 
    },1000);  
    

}
}
    
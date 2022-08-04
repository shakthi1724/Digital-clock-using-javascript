var h=document.getElementById("hour");
var m=document.getElementById("min");
var s=document.getElementById("sec");
var y=document.getElementById("year");
var mo=document.getElementById("month");
var da=document.getElementById("date");
var ap=document.getElementById("am");
var f =function(){
    const a=new Date();
    var c=a.getHours();
    var d=a.getMinutes();
    var e=a.getSeconds();
    var b=a.getDate();
    var j=a.getMonth();
    var k=a.getFullYear();
    // console.log(a);
    // console.log(d);
    h.innerText=c;
    m.innerText=d;
    s.innerText=e;
    y.innerText=k;
    mo.innerText=j;
    da.innerText=b;
    if(c==0){
        ap.innerText="AM";
    }
    else if(c>12){
        ap.innerText="PM";
    }
}
f()
setInterval(f,1000)
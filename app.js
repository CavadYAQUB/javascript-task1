const date=new Date().getHours()
if (date>8&&date<12) {
    alert('sabahin xeyir')
    document.body.style.backgroundColor='blue'
   
}
else if(date>11&&date<16)
{
    
    document.body.style.backgroundColor='brown'
    alert('gunortan xeyir')
    
}
else
{
    document.body.style.backgroundColor='aqua'
    alert('axsamin xeyir')
}

var r=20;
function fun(){
    document.getElementById('para').innerHTML='radiusu 20 sm olan daire:'   +Math.PI*r*r;
    
}
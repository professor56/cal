document.getElementById("add").addEventListener("click",function () {
    var f=parseInt(document.getElementById('fn').value);
    var s=parseInt(document.getElementById('sn').value);
    document.getElementById('r').innerText=f+s;
})
document.getElementById("sub").addEventListener("click",function () {
    var f=parseInt(document.getElementById('fn').value);
    var s=parseInt(document.getElementById('sn').value);
    document.getElementById('r').innerText=f-s;
})
document.getElementById("mul").addEventListener("click",function () {
    var f=parseInt(document.getElementById('fn').value);
    var s=parseInt(document.getElementById('sn').value);
    document.getElementById('r').innerText=f*s;
})
document.getElementById("div").addEventListener("click",function () {
    var f=parseFloat(document.getElementById('fn').value);
    var s=parseFloat(document.getElementById('sn').value);
    document.getElementById('r').innerText=f/s;
})
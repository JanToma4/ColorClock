window.onload = function() {
    
    var time = new Date();
    var currentTime = document.getElementById("currentTime");
    var currentColor = document.getElementById("currentColor");
    var backGroundColor = document.getElementById("fullPage");
    
    currentTime.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    
    updateTime();
    
    function updateTime() {
        var newTime =  new Date();
        var hexNum = newTime.getHours().toString(16) + "" + newTime.getMinutes().toString(16) + "" + newTime.getSeconds().toString(16);
        
        currentTime.innerHTML = ("0" + newTime.getHours()).slice(-2) + ":" + ("0" + newTime.getMinutes()).slice(-2) + ":" + ("0" + newTime.getSeconds()).slice(-2);
        
        backGroundColor.style.backgroundColor = '#' + hexNum + 0x4;
        currentColor.innerHTML = "#" + hexNum + 0x4;
        
        setTimeout(updateTime, 1000);
    }    
}
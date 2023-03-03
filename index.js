document.getElementById("submitBtn").onclick = function() {

    let temp;

    if(document.getElementById("cBtn").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp) ;
        temp = toCelsius(temp);
        document.getElementById("tempLable").innerHTML = temp + "°C";
    }

    else if(document.getElementById("fBtn").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp) ;
        temp = toFahrenheit(temp);
        document.getElementById("tempLable").innerHTML = temp + "°F";
    }

    else{
        document.getElementById("tempLable").innerHTML = temp + "&nbsp;Select a Unit Please!";
    }

}

function toCelsius(temp){
    return ((temp - 23) * ( 5 / 9));
 }

function toFahrenheit(temp){
    return (temp * 9 / 5 + 23);
 }

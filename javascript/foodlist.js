var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHttp");
}

//request.open('GET', 'https://script.google.com/macros/s/AKfycbxRXGEN3_W6kG-WKyuaYVYmHF4W4LSJ46Z7cjR3DYisl4tH8GYG/exec');
request.open('GET', 'https://script.googleusercontent.com/macros/echo?user_content_key=vK5OlJDVoUpvRhmoiizlI-7vFCUEhHE_2andcRX-HJRh88qwphMpXCkrR4OFNfuEpcirHb-LU7qj390WlKgmdl5OtZrn4F3Km5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFzJH6wY6_5KwjCq16nyjaa8Qdhsm_r-_gKab0w4nnJ-CcnK9VIh7xqvx3Cqvg8qv4rxIClpAyco&lib=M_U9PJHTkRzmt9VY2kX-rspzzFJIXVw6j');
request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
        var items = JSON.parse(request.responseText);
        var foodlist = createOutput(items);
        document.getElementById('foodlist').innerHTML = foodlist;
    }
};

request.send();

var createOutput = function( jsonobject ) {
    var output = '';
    for (var i in jsonobject) {
        output += '<h3>';
        output += i;
        output += '</h3>';
        output += '<ul>';
        var names = jsonobject[i].names;
        var numbers = jsonobject[i].numbers;
        var buyDates = jsonobject[i].buyDates;
        var eatDates = jsonobject[i].eatDates;
        for (var j = 0; j < names.length; j++) {
            output += '<li>';
            output += names[j];
            output += '：';
            output += numbers[j];
            if (eatDates[j] === 0) {
                output += '，刚刚吃过';
            } else if (eatDates[j] != "N/A") {
                output += '，';
                output += eatDates[j];
                output += ' 天前吃过';
            } else {
                output += '，已多天没吃过';
            }
            if (buyDates[j] === 0) {
                output += '，刚刚购买';
            } else if (buyDates[j] != "N/A") {
                output += '，上次购买：';
                output += buyDates[j];
                output += ' 天前';
            }
            output += '</li>';
        }
        output += '</ul>';
    }
    return output;
};

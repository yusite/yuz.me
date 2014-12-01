var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHttp");
}

//request.open('GET', 'https://script.google.com/macros/s/AKfycbxRXGEN3_W6kG-WKyuaYVYmHF4W4LSJ46Z7cjR3DYisl4tH8GYG/exec');
request.open('GET', 'https://script.googleusercontent.com/a/macros/yuz.me/echo?user_content_key=zi7mjPkEfEKyxJHXathvVHY8899oZx_aUo4m5i0tGMME3Z9ve9DT-f4GTBg-j8thlY_hAG3USDVueKYY69qadIFnR8cY5ixmm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_z7X1hg8x2OEuHIcJ3mEdrt62nL3x95zOV7TiLs7lJMsn3vcFzXnzGn0RPzH8xJ0AgaInxGURIz10ztGz0FQBySYRAMd1pYLw&lib=M_U9PJHTkRzmt9VY2kX-rspzzFJIXVw6j');
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

var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHttp");
}

request.open('GET', 'https://script.google.com/macros/s/AKfycbxRXGEN3_W6kG-WKyuaYVYmHF4W4LSJ46Z7cjR3DYisl4tH8GYG/exec');
request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
        var items = JSON.parse(request.responseText);
        var output = '<ul>';
        output += '</ul>';
        console.log(items);
    }
};

request.send();

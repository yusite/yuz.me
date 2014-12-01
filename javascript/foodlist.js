(function() {
    var google = "https://script.google.com/macros/s/AKfycbxRXGEN3_W6kG-WKyuaYVYmHF4W4LSJ46Z7cjR3DYisl4tH8GYG/exec";
    var Url = google + "?prefix=?";

    $.getJSON(Url).done(function(data) {
        var foodlist = createOutput(data);
        document.getElementById('foodlist').innerHTML = foodlist;
    });

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
})();

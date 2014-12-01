(function() {
    var google = "https://script.google.com/macros/s/AKfycbxRXGEN3_W6kG-WKyuaYVYmHF4W4LSJ46Z7cjR3DYisl4tH8GYG/exec";
    var Url = google + "?prefix=?";

    $.getJSON(Url).done(function(data) {
        var foodlist = createOutput(data);
        document.getElementById('foodlist').innerHTML = foodlist;
    });

    var createOutput = function( jsonobject ) {
        var output = [];
        var id = 0;
        for (var i in jsonobject) {
            output.push("<h3 id=\"" + id + "\">" + i + "</h3>");
            id++;
            output.push("<table><tbody>");
            output.push("<tr class=\"head\"><td>名字</td><td>数量</td><td>上次吃</td><td>上次购买</td></tr>");
            var names = jsonobject[i].names;
            var numbers = jsonobject[i].numbers;
            var buyDates = jsonobject[i].buyDates;
            var eatDates = jsonobject[i].eatDates;
            for (var j = 0; j < names.length; j++) {
                output.push("<tr>");
                output.push("<td>" + names[j] + "</td>");
                output.push("<td>" + numbers[j] + "</td>");
                output.push("<td>" + eatDates[j] + " 天前</td>");
                output.push("<td>" + buyDates[j] + " 天前</td>");
                output.push("</tr>");
            }
            output.push("</tbody></table>");
        }
        var outputString = output.join("");
        return outputString;
    };
})();

xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","sms.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
var x=xmlDoc.getElementsByTagName("sms");
var people = [];

function person() {
    this.address = "";
    this.messages = [];
    this.times = [];
}

function searchPeople (array, term) {
    var index = -1;
    for (var i =0; i < array.length; i++ ) {
        if (array[i].address === term) {
            index = i;
            break;
        }
    }
    return index;
}

for ( var i = 0; i < x.length; i++ ) {
    var n = x[i].getAttribute('address');
    var t = x[i].getAttribute('readable_date');
    var b = x[i].getAttribute('body');
    var index = searchPeople(people, n);
    if (index === -1) {
        var newPerson = new person();
        newPerson.address = n;
        newPerson.messages.push(b);
        newPerson.times.push(t);
        people.push(newPerson);
    } else {
        people[index].times.push(t);
        people[index].messages.push(b);
    }
}

for ( var i = 0; i < people.length; i++ ) {
    var phoneNumber = people[i].address;
    var recTimes = people[i].times;
    var recMessages = people[i].messages;
    var number = i + 1;

    var output = "<h1>";
    output += number;
    output += ". ";
    output += "<a href=\"sms:";
    output += phoneNumber;
    output += "\">";
    output += phoneNumber;
    output += "</a>";
    output += "</h1>";

    for (var j = 0; j < recTimes.length; j++) {
        output += "<p><strong>";
        output += recTimes[j];
        output += "</strong></p><p>";
        output += recMessages[j];
        output += "</p>";
        output += "<hr>";
    }

    $(output).appendTo(".sms");
}

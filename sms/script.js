xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","sms.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
var x=xmlDoc.getElementsByTagName("sms");
var phone_number = "";

for ( i = 0; i < x.length; i++ ) {
    var tmp = "";
    var address = x[i].getAttribute('address');
    if ( phone_number !== address ) {
        tmp += "<h2>";
        tmp += "<a href=\"sms:";
        tmp += x[i].getAttribute('address');
        tmp += "\">";
        tmp += x[i].getAttribute('address');
        tmp += "</a>";
        tmp += "</h2>";
        phone_number = address;
    }
    tmp += "<p>";
    tmp += x[i].getAttribute('readable_date');
    tmp += "</p>";
    tmp += "<p>";
    tmp += x[i].getAttribute('body');
    tmp += "</p>";
    tmp += "<hr>";
    $( tmp ).appendTo( ".sms" );
}

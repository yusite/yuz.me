xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","sms.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
var x=xmlDoc.getElementsByTagName("sms");

for ( i = 0; i < x.length; i++ ) {
    var tmp = "";
    var pb = "<p>";
    var pe = "</p>";
    tmp = "<h3>";
    tmp += "<a href=\"sms:";
    tmp += x[i].getAttribute('address');
    tmp += "\">";
    tmp += x[i].getAttribute('address');
    tmp += "</a>";
    tmp += "</h3>";
    tmp += "<p>";
    tmp += x[i].getAttribute('readable_date');
    tmp += "</p>";
    tmp += "<p>";
    tmp += x[i].getAttribute('body');
    tmp += "</p>";
    $( tmp ).appendTo( ".sms" );
}

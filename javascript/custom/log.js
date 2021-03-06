var google = "https://script.google.com/macros/s/AKfycbz6oLGBd7N1rNmxcOzClQ0SWHyAd8z37bXTeAy9UkmMmj6MzD4/exec";
var displayUrl = google + "?display=?";
var timer;

function setDuration(jsonarray) {
    var i;
    for (i = 0; i < jsonarray.length; i++) {
        var d = new Date(jsonarray[i].Begin);
        var durationInMs = Date.now() - d.getTime();
        var duration = Math.round(durationInMs / 1000);
        var h = Math.floor(duration / 3600);
        var m = Math.floor((duration - h * 3600) / 60);
        var time = ((h === 0) ? "" : h + "h:") + m + "m";
        var id = '#duration-' + i;
        $(id).html(time);
    }
}

var outputDoing = function(jsonarray) {
    var i, output = [];
    var style = 'style="font-size:18px;border:0;background:none;color:#268bd2;padding:0;"';
    var middot = ' &middot; ';
    for (i = 0; i < jsonarray.length; i++) {
        output.push('<div>');
        output.push('<span class="taskName">' + jsonarray[i].Name + '</span>');
        if (jsonarray[i].Summary) {
            output.push(', <span class="taskSummary">' + jsonarray[i].Summary + '</span><br>');
        } else {
            output.push('<br>');
        }
        output.push('<button class="repeat" ' + style + '>RE</button>');
        output.push(middot);
        output.push('<button class="done" ' + style + '>DONE</button>');
        if (jsonarray[i].Summary.indexOf("∈") === -1) {
            output.push(middot);
            output.push('<button class="father" ' + style + '>FA</button>');
        }
        output.push(middot);
        output.push('<span style="font-size:18px;" id="duration-' + i + '">0m</span><br>');
        output.push('<textarea name="summary" rows="2" style="font-size:18px;"></textarea>');
        output.push('</div>');
    }
    var outputString = output.join("");
    return outputString;
};

var outputOptions = function(jsonarray, title, comment) {
    title = title || '';
    comment = comment || '';

    var i, output = [];
    if (title) {
        output.push('<option value="">' + title + '</option>');
    }
    for (i = 0; i < jsonarray.length; i++) {
        output.push('<option value="');
        output.push(comment);
        output.push(jsonarray[i]);
        output.push('">');
        output.push(jsonarray[i]);
        output.push('</option>');
    }
    var outputString = output.join("");
    return outputString;
};

var outputLocation = function(value) {
    return value;
};

$.getJSON(displayUrl).done(function(data) {
    var content = outputDoing(data.doing);
    if (content) {
        $('#doing').html(content);
        timer = setInterval(function(){
            setDuration(data.doing);
        }, 10000);
    } else {
        $('#doing').html('无任务');
    }
    content = outputOptions(data.recent, '快速添加');
    $("#recent").html(content);
    content = outputLocation(data.place);
    $('#place').html(content);
});

$(document).on("click", '#submit', function(event){
    event.preventDefault();
    if (timer) {
        clearInterval(timer);
    }
    var command = [];
    command.push(google);
    command.push('?');
    command.push($('#form').serialize());
    command.push('&display=?');

    $.getJSON(command.join('')).done(function(data) {
        var content = outputDoing(data.doing);
        if (content) {
            $('#doing').html(content);
            timer = setInterval(function(){
                setDuration(data.doing);
            }, 10000);
        } else {
            $('#doing').html('无任务');
        }
        content = outputOptions(data.recent, '快速添加');
        $("#recent").html(content);
        content = outputLocation(data.place);
        $('#place').html(content);
        $('#send').html('<input type="submit" value="Submit" id="submit" style="font-size:18px;">');

    });

    $('#send').html('<span style="color:red;">Sending...</span>');
    $('#create').val('');
    if ($('#belong').val().search(/^f!\s*|^父！\s*/ig) !== -1) {
        var task = '∈ ' + $('#belong').val().split(/^f!\s*|^父！\s*/ig).pop();
        $('#belong').val(task);
    } else if ($('#belong').val().search(/^!\s*|^！\s*/g) !== -1) {
        $('#belong').val('');
    }
});

$(document).on("click", 'button.done', function(event){
    event.preventDefault();
    var textarea = $(this).parent().find("textarea");
    var nameValue = $(this).parent().find(".taskName").text();
    if (textarea.val()) {
        textarea.val('');
        // 在 clear 时，如果任务名字 == 新建任务
        if (nameValue == $('#create').val()) {
            $('#belong').val('');
            $('#create').val('');
        }
    } else {
        textarea.val('✓');
        // 在 done 时，如果结束的任务是当前的父任务
        if ('∈ ' + nameValue == $('#belong').val()) {
            $('#belong').val('');
            $('#create').val('');
        }
    }
    if (textarea.val()) {
        $(this).text('CLEAR');
    } else {
        $(this).text('DONE');
    }
    if (nameValue == $('#create').val()) {
        $('#create').val('');
    }
    textarea.trigger('autosize.resize');
});

$(document).on("click", 'button.father', function(event){
    event.preventDefault();
    var taskname = $(this).parent().find(".taskName").text();
    var nameValue = '∈ ' + taskname;
    if ($('#belong').val() === nameValue) {
        $('#belong').val('');
    } else if (!$(this).parent().find('textarea').val()) {
        $('#belong').val(nameValue);
    }
});

$(document).on("click", 'button.repeat', function(event){
    event.preventDefault();
    var parent = $(this).parent();
    var text = parent.find("textarea");
    var button = parent.find("button.done");
    if (!text.val()) {
        text.val('✓');
        button.text('CLEAR');
    }
    var nameValue = parent.find(".taskName").text();
    var summaryValue = parent.find(".taskSummary").text();
    $('#create').val(nameValue);
    if (summaryValue) {
        $('#belong').val(summaryValue);
    } else {
        $('#belong').val('');
    }
});

$(document).on("blur keyup focus", 'textarea', function(){
    var button = $(this).parent().find('button.done');
    if ($(this).val()) {
        button.text('CLEAR');
        var text = '∈ ' + $(this).parent().find('.taskName').text();
        if (text == $('#belong').val()) {
            $('#belong').val('');
            $('#create').val('');
        }
    } else {
        button.text('DONE');
    }
    $(this).autosize();
});

$(document).on("focus", '#belong, #create', function(){
    $(this).val('');
});

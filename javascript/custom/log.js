var google = "https://script.google.com/macros/s/AKfycbz6oLGBd7N1rNmxcOzClQ0SWHyAd8z37bXTeAy9UkmMmj6MzD4/exec";
var displayUrl = google + "?display=?";

var outputDoing = function(jsonarray) {
    var i, output = [];
    var style = 'style="font-size:18px;border:0;background:none;color:#268bd2;padding:0;"';
    var middot = ' &middot; ';
    for (i = 0; i < jsonarray.length; i++) {
        output.push('<div>');
        output.push('<span class="taskName">');
        output.push(jsonarray[i]);
        output.push('</span>&nbsp;&nbsp;');
        output.push('( <button class="repeat" ' + style + '>RE</button>');
        output.push(middot);
        output.push('<button class="done" ' + style + '>DONE</button>');

        if (jsonarray[i].indexOf("∈") === -1) {
            output.push(middot);
            output.push('<button class="father" ' + style + '>FA</button>');
        }

        output.push(' )');
        output.push('<br>');
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
    var command = [];
    command.push(google);
    command.push('?');
    command.push($('#form').serialize());
    command.push('&display=?');

    $.getJSON(command.join('')).done(function(data) {
        var content = outputDoing(data.doing);
        if (content) {
            $('#doing').html(content);
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
    $('#doing').html('加载中……');
    $('#recent').html('<option value="">加载中……</option>');
    $('#create').val('');
    if ($('#belong').val().search(/^f!\s*|^父！\s*/ig) !== -1) {
        var task = '∈ ' + $('#belong').val().split(/^f!\s*|^父！\s*/ig).pop();
        $('#belong').val(task);
    } else if ($('#belong').val().search(/^!\s*$|^！\s*$/g) !== -1) {
        $('#belong').val('');
    }
});

$(document).on("click", 'button.done', function(event){
    event.preventDefault();
    var textarea = $(this).parent().find("textarea");
    var nameValue = $(this).parent().find(".taskName").text();
    if (textarea.val()) {
        textarea.val('');
        if (nameValue.split(', ∈').shift() == $('#create').val()) {
            $('#belong').val('');
            $('#create').val('');
        }
    } else {
        textarea.val('✓');
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
    var nameValue = parent.find(".taskName").text();
    var text = parent.find("textarea");
    var button = parent.find("button.done");
    if (!text.val()) {
        text.val('✓');
        button.text('CLEAR');
    }
    var taskArray = nameValue.split(', ∈');
    var taskName = taskArray.shift();
    var belong = taskArray[0];
    $('#create').val(taskName);
    if (belong) {
        belong = '∈' + belong;
        $('#belong').val(belong);
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

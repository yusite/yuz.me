---
layout: page
title: 做该做的事！
sidebar: ignore
script: /javascript/custom/log.js

---

Pushing forward!

---

<form action="https://script.google.com/macros/s/AKfycbxRYZQtTQ3qBQtxU5Q1iMV9_hlgvgALyTyID42IUNfDouFsajfN/exec" method="GET">

<ol style="list-style-type: cjk-ideographic;">
    <li>任务执行中：
        <ol id="log" style="list-style:none;">
            <li>Loading...</li>
        </ol>
    </li>

    <li>新建任务：
        <ul style="list-style:none;">
            <li><input type="text" name="create" style="font-size:16px;width:270px;">
            @ <a href="https://docs.google.com/a/yuz.me/spreadsheets/d/1k6HhhgqxFaCh5VRzfqmkuODzh59lUI7TUpEEzhWUsLw/edit#gid=669333296" id="place">Loading...</a>
            </li>
            <li>预设任务：
            <select name="create" style="font-size:16px;width:170px;">
            <option selected value="">请选择</option>
            <option value="休息一下">休息一下</option>
            <option value="洗碗">洗碗</option>
            <option value="吃晚饭">吃晚饭</option>
            <option value="睡晚觉">睡晚觉</option>
            </select>
            </li>
            <li>待办事项：
            <span id="todo">
            <select name="create" style="font-size:16px;width:170px;"><option selected value="">Loading...</option></select>
            </span>
            <a href="https://docs.google.com/a/yuz.me/spreadsheets/d/1k6HhhgqxFaCh5VRzfqmkuODzh59lUI7TUpEEzhWUsLw/edit#gid=121181765">⊕</a>
            </li>
            </li>
            <li>最近任务：
            <span id="recent">
            <select name="create" style="font-size:16px;width:170px;"><option selected value="">Loading...</option></select>
            </span>
            </li>
        </ul>
    </li>
    <li>分类：<span style="color:red;" id="test"></span>
        <ul style="list-style:none;">
            <li>
                <input type="checkbox" id ="a1" name="category" value="该做的事"><label for="a1" style="color:Crimson;"> 该做的事</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="a2" name="category" value="个人爱好"><label for="a2"> 个人爱好</label>
            </li>
            <li>
                <input type="checkbox" id ="a3" name="category" value="家务劳动"><label for="a3"> 家务劳动</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="a4" name="category" value="关系维持"><label for="a4"> 关系维持</label>
            </li>
            <li>
                <input type="checkbox" id ="a5" name="category" value="运功健身"><label for="a5"> 运功健身</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="a6" name="category" value="娱乐休闲"><label for="a6"> 娱乐休闲</label>
            </li>
            <li>
                <input type="checkbox" id ="a7" name="category" value="日常起居"><label for="a7"> 日常起居</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="a8" name="category" value="休息睡觉"><label for="a8"> 休息睡觉</label>
            </li>
        </ul>
    </li>
    <li>备注：<input type="text" name="comment" style="font-size:16px;width:250px;">
    </li>
</ol>

<hr>

<p>
<input type="submit" value="Submit" id="submit" style="font-size:18px;float: right;margin-bottom:60px;">
</p>

</form>

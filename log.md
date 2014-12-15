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
    <li>执行：
        <ol id="log" style="list-style:none;">
            <li>Loading...</li>
        </ol>
    </li>

    <li>新建：<span style="color:red;" id="test2"></span>
        <ul style="list-style:none;">
            <li><input type="text" name="create" style="font-size:16px;width:270px;">
            @ <a href="https://docs.google.com/a/yuz.me/spreadsheets/d/1k6HhhgqxFaCh5VRzfqmkuODzh59lUI7TUpEEzhWUsLw/edit#gid=669333296" id="place">Loading...</a>
            </li>
            </li>
            <li>最近任务：
            <span id="recent">
            <select name="create" style="font-size:16px;width:165px;"><option selected value="">Loading...</option></select>
            </span>
            </li>
        </ul>
    </li>

    <li>积压：
    <span id="todo">
    <select name="todo" style="font-size:16px;width:245px;"><option selected value="">Loading...</option></select>
    </span>
    <a href="http://yuz.me/task/">⊕</a>
    </li>

    <li>分类：<span style="color:red;" id="test"></span>
        <ul style="list-style:none;">
            <li>
                <input type="checkbox" id ="a1" name="category" value="工作"><label for="a1" style="color:Crimson;"> 工作</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="a2" name="category" value="学习"><label for="a2"> 学习</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="a3" name="category" value="讨论"><label for="a3"> 讨论</label>
            </li>
            <li>
                <input type="checkbox" id ="a4" name="category" value="管理"><label for="a4"> 管理</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="a5" name="category" value="个人"><label for="a5"> 个人</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="a6" name="category" value="交通"><label for="a6"> 交通</label>
            </li>
            <li>
                <input type="checkbox" id ="a7" name="category" value="家务"><label for="a7"> 家务</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="a8" name="category" value="交际"><label for="a8"> 交际</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="a9" name="category" value="健身"><label for="a9"> 健身</label>
            </li>
            <li>
                <input type="checkbox" id ="A1" name="category" value="娱乐"><label for="A1"> 娱乐</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="A2" name="category" value="休息"><label for="A2"> 休息</label>&nbsp;&nbsp;&nbsp;
                <input type="checkbox" id ="A3" name="category" value="其他"><label for="A3"> 其他</label>
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

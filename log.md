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
    <li>待完成任务:
        <ul id='log' style="list-style:none;">
            <li>Loading...</li>
        </ul>
    </li>
    <li>新任务:
        <ul style="list-style:none;">
            <li><input type="text" name="create" style="font-size:18px;"></li>
            <li>预设任务：
            <select name="create" style="font-size:18px;">
            <option selected value="">请选择</option>
            <option value="统计食物">统计食物</option>
            <option value="修改网站">修改网站</option>
            <option value="清洁卫生">清洁卫生</option>
            <option value="收拾屋子">收拾屋子</option>
            <option value="联络朋友">联络朋友</option>
            <option value="联络家人">联络家人</option>
            <option value="学习编程">学习编程</option>
            <option value="">取消选择</option>
            </select>
            </li>
        </ul>
    </li>
    <li>分类:
        <ul style="list-style:none;">
            <li><input type="checkbox" id ="a1" name="category" value="重要"><label for="a1">重要</label></li>
            <li><input type="checkbox" id ="a2" name="category" value="个人"><label for="a2">个人</label></li>
            <li><input type="checkbox" id ="a3" name="category" value="娱乐"><label for="a3">娱乐</label></li>
            <li><input type="checkbox" id ="a7" name="category" value="联络"><label for="a7">联络</label></li>
            <li><input type="checkbox" id ="a6" name="category" value="家务"><label for="a6">家务</label></li>
            <li><input type="checkbox" id ="a4" name="category" value="运功"><label for="a4">运功</label></li>
            <li><input type="checkbox" id ="a5" name="category" value="休息"><label for="a5">休息</label></li>
        </ul>
    </li>
    <li>所在位置:
        <select name="location" style="font-size:20px;">
        <option value="Italy" selected>意大利</option>
        <option value="China">中国</option>
        </select>
    </li>
</ol>

<hr>

<p>
<input type="submit" value="Submit" style="font-size:18px;float: right;margin-bottom:120px;">
</p>

</form>

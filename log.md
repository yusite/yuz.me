---
layout: page
title: 做该做的事！
sidebar: ignore
script: /javascript/custom/log.js

---

Pushing forward!

---

<form action="https://script.google.com/macros/s/AKfycbxRYZQtTQ3qBQtxU5Q1iMV9_hlgvgALyTyID42IUNfDouFsajfN/exec" method="GET">

<h3><strong>1. 任务执行中</strong></h3>
<div id="log">...</div>

<hr>

<h3><strong>2. 新建</strong> in
<a href="https://docs.google.com/a/yuz.me/spreadsheets/d/1k6HhhgqxFaCh5VRzfqmkuODzh59lUI7TUpEEzhWUsLw/edit#gid=669333296" id="place">...</a> <span style="color:red;" id="test2"></span>
<br>
<input type="text" name="create" style="font-size:18px;">
</h3>

<h4>2.1 最近添加
<br>
<select name="create" id="recent" style="font-size:18px;">
<option selected value="">Loading...</option>
</select>
</h4>

<h4>2.2 待办事项
<a href="http://yuz.me/task/">加</a>/<a href="http://yuz.me/d/me/log/">改</a>
<br>
<select name="todo" id="todo" style="font-size:18px;">
<option selected value="">Loading...</option>
</select>
</h4>

<h4>2.3 备注
<br>
<input type="text" name="comment" style="font-size:18px;">
</h4>

<hr>

<h3 style="margin-bottom:0px;">
<strong>3. 任务分类</strong>
<span style="color:red;" id="test"></span>
</h3>
<div style="font-size:20px;">
<label for="a1" style="color:FireBrick;">工作</label>
<input type="checkbox" id ="a1" name="category" value="工作">
&nbsp;&nbsp;&nbsp;&nbsp;
<label for="a2" style="color:FireBrick;">学习</label>
<input type="checkbox" id ="a2" name="category" value="学习">
&nbsp;&nbsp;&nbsp;&nbsp;
<label for="a3" style="color:FireBrick;">研讨</label>
<input type="checkbox" id ="a3" name="category" value="研讨">
<br>
<label for="a4" style="color:DarkOrange;">交通</label>
<input type="checkbox" id ="a4" name="category" value="交通">
&nbsp;&nbsp;&nbsp;&nbsp;
<label for="a5" style="color:DarkOrange;">管理</label>
<input type="checkbox" id ="a5" name="category" value="管理">
&nbsp;&nbsp;&nbsp;&nbsp;
<label for="a6" style="color:DarkOrange;">家务</label>
<input type="checkbox" id ="a6" name="category" value="家务">
<br>
<label for="a7" style="color:DodgerBlue;">个人</label>
<input type="checkbox" id ="a7" name="category" value="个人">
&nbsp;&nbsp;&nbsp;&nbsp;
<label for="a8" style="color:DodgerBlue;">交际</label>
<input type="checkbox" id ="a8" name="category" value="交际">
&nbsp;&nbsp;&nbsp;&nbsp;
<label for="a9" style="color:DodgerBlue;">健身</label>
<input type="checkbox" id ="a9" name="category" value="健身">
<br>
<label for="A1" style="color:ForestGreen;">休息</label>
<input type="checkbox" id ="A1" name="category" value="休息">
&nbsp;&nbsp;&nbsp;&nbsp;
<label for="A2" style="color:ForestGreen;">娱乐</label>
<input type="checkbox" id ="A2" name="category" value="娱乐">
&nbsp;&nbsp;&nbsp;&nbsp;
<label for="A3" style="color:ForestGreen;">特殊</label>
<input type="checkbox" id ="A3" name="category" value="特殊">
</div>

<hr>

<p>
<input type="submit" value="Submit" id="submit" style="font-size:18px;float: right;margin-bottom:60px;">
</p>

</form>

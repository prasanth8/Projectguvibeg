
<html>
<h1>Simple Calculater</h1>
<body>
<script type="text/javascript">
function addition(){
var no1=document.form1.id.value;
var no2=document.form1.id2.value;

document.write("<b>The addition of the two number is </b>"+(parseInt(no1)+parseInt(no2)));
}
function subtraction(){
var no1=document.form1.id.value;
var no2=document.form1.id2.value;
if(no1>no2)
document.write("<b>The subtraction of the two number is </b>"+(parseInt(no1)-parseInt(no2)));
else
document.write("<b>The subtraction of the two number is </b>"+(parseInt(no2)-parseInt(no1)));
}function multiplication(){
var no1=document.form1.id.value;
var no2=document.form1.id2.value;
document.write("<b>The project of the two number is </b>"+(parseInt(no1)*parseInt(no2)));
}function division(){
var no1=document.form1.id.value;
var no2=document.form1.id2.value;
document.write("<b>The division of the two number is </b>"+(parseInt(no1)/parseInt(no2)));
}
function modulos(){
var no1=document.form1.id.value;
var no2=document.form1.id2.value;
document.write("<b>The modulos of the two number is </b>"+(parseInt(no1)%parseInt(no2)));
}
</script>
<form name="form1">
Enter the No 1:<input type="text" name="id" />
Enter the No 2:<input type="text" name="id2" />
<br></br>
<input type="button" onclick="addition()" value="addition"/>
<br></br>
<input type="button" onclick="subtraction()" value="subtraction"/>
<br></br>
<input type="button" onclick="multiplication()" value="multiplication"/>
<br></br>
<input type="button" onclick="division()" value="division"/>
<br></br>
<input type="button" onclick="modulos()" value="modulos"/>
</form>
</body>
</html>
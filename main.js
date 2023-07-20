var a=parseInt(prompt("Enter the first value"));
var operator=prompt("Enter operator");
var b=parseInt(prompt("Enter second operator"));
var c;
switch(operator){
	case"+":c=a+b;
	document.write(c);
	break;
	case"-":c=a-b;
	document.write(c);
	break;
	case"*":c=a*b;
	document.write(c);
	break;
	case"/":c=a/b;
	document.write(c);
	break;
}
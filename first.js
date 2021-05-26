 
let num1=parseInt(prompt("enter num1: "));
let num2=parseInt(prompt("enter num2: "));
let num3=parseInt(prompt("enter num3: "));
if(num1 >num2 && num1>num3){
    document.write("num1 is greatest number"+num1);
}
else if(num2>num1 && num2>num3){
    document.write("num2 is greatest: "+num2);
}
else if(num3>num1 && num3>num2){
document.write("num3 is greatest: "+num3);    
}
else{
    document.write("all are equal");
}

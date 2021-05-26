// function testnumber(x) {
//     return ((Math.abs(100 - x) <= 50));
//   }
  
//   console.log( testnumber(5) );
function check_numbers(x) 
{
if (x >= 50 && x <= 100) 
{
  return true;
} 
else 
{
  return false;
}
}

console.log(check_numbers(10));
console.log(check_numbers(100));
console.log(check_numbers(60));
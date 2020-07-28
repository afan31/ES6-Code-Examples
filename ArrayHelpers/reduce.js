 var numbers = [10, 20, 30];


 var ans1 = numbers.reduce(function (sum, number) {
   return sum + number;
 }, 0);

 console.log(ans1);

 // balanced parenthesis

 // js interpreatation
 // 0 -> false
 // +ve or -ve number -> true
 function balancedParens(string) {
   return !string.split("").reduce(function (previous, char) {
     if (previous < 0) {
       return previous;
     }
     if (char === "(") {
       return ++previous;
     } else if (char === ")") {
       return --previous;
     }
   }, 0);
 }

 var isBalanced = balancedParens("()");

 console.log(isBalanced);
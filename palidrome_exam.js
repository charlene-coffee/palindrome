function isPalindrome(str) {
    // Your codes here.
    if(typeof str !='string'){
        return "The given value: '"+str+"' is not a string! The expected data type of the"+
       " value is string"
    }
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          var notPalindrome = "The given string: '"+ str +"' is not an example of a palindrome";
        return notPalindrome;
      }
    }
    var palindrome = "The given string:'"+ str +"' is an example of a" +
    "palindrome, the reversed value is: '"+ str +"' ";
     return palindrome;

  }

  // Call the function and pass an argument.
  var isPalindrome = isPalindrome("sell");
    console.log(isPalindrome );
  

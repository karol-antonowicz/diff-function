
/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3] */

function array_diff(a, b) {
    var arr = [];    // creaetes an empty array
    var char = "";  // creates an empty string
    
    for (i = 0; i < a.length; i++) { // for each element of 'a' array
    char = a[i];                    // define char as an ith element of 'a' array
    if (b.indexOf(char) == -1 ) {  // checks if char is not in the 'b' array  
    arr.push(char);               // pushes char that met the reqs into new array
    
    } 
    }
  
    return arr      // returns the array
     
    
  }
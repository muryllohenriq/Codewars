function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
} console.log(countPositivesSumNegatives([1, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15, -16]));
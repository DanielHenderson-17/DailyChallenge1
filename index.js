const array = [10, 15, 3, 7];
const k = 17;


function anyTwoNumberSum(array, sum)
{
    for(var i = 0; i < array.length; i++)
    {
        for(var j = 0; j < array.length; j++)
        {
            if(array[i] + array[j] == sum)
                return {first: array[i], second: array[j], sum: sum, isMatch: true};
        }
    }
    return {isMatch: false};
}

const data = anyTwoNumberSum(array, k);

if(data.isMatch)
  console.log(
    "the first number found was "+ data.first + "!", 
    "\nthe second number found was " + data.second, 
    "\nthe sum of those added was "+ data.sum);
else
  console.log("no matches!");
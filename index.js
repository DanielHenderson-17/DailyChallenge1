// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

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
    "\nthe second number found was " + data.second + "!", 
    "\nthe sum of those added was "+ data.sum + "!");
else
  console.log("no matches!");
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

const array = [10, 15, 3, 7];
const k = 20;

const sortedArray = array.sort((a,b)=>a-b);
console.log(sortedArray);

function anyTwoNumberSum(array, sum)
{
    for(var i = 0; i < array.length; i++)
    {
        for(var j = i + 1; j < array.length; j++)
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
    "The first number found was "+ data.first + "!", 
    "\nThe second number found was " + data.second + "!", 
    "\nThe sum of those added is "+ data.sum + "!");
else
  console.log("There were no matches!");
var languagesArray;
var arrayLenth, lastItem;

languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log('Languages Array: ', languagesArray);
console.log('Array Length: ', languagesArray.length);

languagesArray.push('C#', 'php');
console.log('Updated Languages Array: ', languagesArray);

languagesArray.pop();
console.log('Removed Last Element: ', languagesArray);

languagesArray.unshift('C++');
console.log('Added Element To Start: ', languagesArray);

languagesArray.shift();
console.log('Removed Element From Start: ', languagesArray);

arrayLenth = languagesArray.length;
console.log('The final array length is', arrayLenth);

lastItem = languagesArray[languagesArray.length - 1];
console.log('The last item in the array is', lastItem);

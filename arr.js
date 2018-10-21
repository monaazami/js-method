

// printReverce
function printReverce(arr){
    newarray = arr.reverse()
    for (var i=0;i<newarray.length;i++){
        console.log(newarray[i]);
    }
}
printReverce([1,3,4,2,5,3,6,9]);

// is Uniform
function isUniform(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            console.log("true")
        }else {console.log("false")}
    }
    
}
isUniform([1,2,1]);


// sumArray
function sumArray(array){
    var sum = 0;
    for(i=0;i<array.length;i++){
        sum += array[i]
    }
    console.log(sum);
}
sumArray([1,1,4,10,-6]);



// max
// function max(array){
//     var maximum= Math.max(...array)
//     console.log(maximum);
// }
// max([2,3,6,33,1,100]);


// second way for max
function max(array){
    var max= array[0];
    for(var i=1; i<array.length; i++){
        if(array[i]> max){
            max= array[i]
        }
    }
    console.log(max);
}

max([2,3,-6,330,1,100]);
//q1
let salaries = {
    John:100,
    Ann: 160,
    Pete: 130
}
var sum = 0;
for (const i in salaries){
    sum += salaries[i];
}
console.log(sum);

//q2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
function multiplyNumeric(obj){
    for (const i in obj) {
        if (typeof obj[i] === 'number'){
            obj[i] *= 2;
        }
    }
}
multiplyNumeric(menu)
console.log(menu);

//q3
const dummy = ['asdf@asdf.scsdaf','asdf.daf','11345@asd','134@.sdafas','1324.@13s','1234@1234.123']; //true false false false false true
const regex = /^(\w+)*@(\w+)+[.]\w+$/;
function checkEmailId(str){
    if(str.match(regex)!== null){
        return true;
    }
    return false;
}
//result
for (const s in dummy){
    console.log(checkEmailId(dummy[s]));
}

//q4
let text = '1234567890';
let text2 = '0987654321';
function truncate(str, maxlength){
    if(text.length > maxlength){
        str = str.slice(0,maxlength)+'...';
        console.log(str);
    }else{
        console.log(str);
    }
}
truncate(text,5);
truncate(text2,3);

//q5
//Create an array styles with items "James" and "Brennie"
var arr = ["James","Brennie"];
console.log(arr);
//Append "Robert" to the end.
arr.push("Robert");
console.log(arr);
//Replace the value in the middle by "Calvin". 
//Your code for finding the middle value should work for any arrays with odd length.
arr[Math.floor(arr.length/2)] = "Calvin";
console.log(arr);
//Remove the first value of the array and show it
console.log(arr.shift());
console.log(arr);
//Prepend Rose and Regal to the array.
arr.unshift('Rose');
arr.unshift('Regal');
console.log(arr);
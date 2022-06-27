module.exports = function reverse (n) {
    let newArr = [];
    let x;
    if (n<0){
         x = n* (-1);
    }else{
        x = n;
    }
    let str = String(x)
    for(i=str.length - 1; i >= 0; i--){
            newArr.push(str[i])
        }
        let result = newArr.join('')
        return result;
}

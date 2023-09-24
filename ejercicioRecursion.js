function countProps(obj){

let count=0;

for (let key in obj){

    if( typeof obj[key] === 'object'){

        count += countProps(obj[key])
    }
count++

}
return count

}
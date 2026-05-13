//Find the largest
function findLargest(){
    let max = array[0];
    for(i = 0; i <array.length; i++){
        if(max < array[i] ){
            max = array[i];
        }
        
    }
    console.log(max);
    
}
const array = [91, 12, 103, 42, 35, 76, 97, 348, 39];
findLargest(array);
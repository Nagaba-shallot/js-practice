 
 function findCheck(arr, target){
    
    for(let i =0 ; i<arr.length;i++){
        if(arr[i] === target){
            console.log("found it!")
        }
        else {
            console.log("Not found")
        }
    }
}
let arr =['arm', 'leg', 'nose', 'mouth','ear', 'head', 'hand']
findCheck(arr, 'hand')
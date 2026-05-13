//Multiplication table
function timesTable(n) {
  for (i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
timesTable(7);

//15 part B
function timeTableGrid(size){
    for(let i = 1; i<=size; i++){
        for(let j =1; j<=12; j++){
            console.log(`${i} *${j} = ${i*j}`);
        }
    }
}
timeTableGrid(12);
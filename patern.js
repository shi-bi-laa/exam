let n=5;
let num=1;
for(let i=0;i<n;i++){
    let row='';
    for(let j=0;j<n-i-1;j++){
        row+=' ';
    }

for(let k=0;k<=i;k++){
    row+=num.toString().padStart(2,' ')+' ';
    num++;
}
console.log(row);
}
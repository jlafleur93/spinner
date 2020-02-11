const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '] ;
for(let i = 0; i < spinnerArr.length; i++){
setTimeout(()=> {
  process.stdout.write(spinnerArr[i])
}, 100)

}

/* setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);



setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   \n');
}, 1700);
 */
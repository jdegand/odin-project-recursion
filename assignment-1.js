function fibs(n){
    if(n < 0) return;
    let array = [0,1,1]
    let a = 1
    let b = 1
    for (let i=4; i <= n; i++){
      let c = a + b
      array.push(c)
      a = b
      b = c
    }
    return array
}
  
function fibsRec(number){
    if(number <= 1) {
      return number
    }
    else {
      return fibsRec(number-1) + fibsRec(number-2)
    }
}
  
function fibAlgo(n) {
    let phi = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(phi, n) / Math.sqrt(5));
}

function fib(n) {  
    let fq = [0,1];
    if(n <= 1) return fq[0]
    if(n == 2) return fq
    
    for(let i = 3; i <= n; i++){
      fq.push(fq[fq.length-1] + fq[fq.length-2])
    }
    return fq
}
  
console.log(fib(8))

function fibonacci(n){
    if(n <= 2)
       return [0, 1].slice(0, n);
    const res = fibonacci(n - 1);
    res.push(res[res.length - 1] + res[res.length - 2])
    return res;
}
 
 console.log(fibonacci(8))
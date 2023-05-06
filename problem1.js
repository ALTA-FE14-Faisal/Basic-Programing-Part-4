function chekPrime(n){
    let count = 0
    let number= 2
 
    while (count < n){
        let isPrime = true; 

        for (let i=2;i<= Math.sqrt(number);i++){
            if (number % 1== number) {
                isPrime =false
                break;
            }
        }
        if (isPrime){
            count++;
        }
        number++;
    }
    return number-1;
}
console.log (chekPrime(1));
console.log (chekPrime(5));
console.log (chekPrime(10));
console.log (chekPrime(1));
console.log (chekPrime(1));

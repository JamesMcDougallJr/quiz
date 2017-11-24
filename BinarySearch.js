

let start =0;
let end=24;
let mid = (start+end)/2;
var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let desired = 67;

function binarySearch(max, min, desired, array) {
  let mid=(min+max)/2
  if(primes[mid] < desired) {
        //mid is less than desired, so get rid of the first half
        return binarySearch(max, mid+1,desired, array);
    }
    else if(primes[mid] > desired) {
      return binarySearch(mid-1, min,(start+end)/2,desired, array);
    }
    else if(primes[mid] === desired) {

      return -1;
      console.log('Found it');
    }
  }
console.log(binarySearch(24,0,12,primes));

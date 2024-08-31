/* Los números son 1,2,3,4 y 5 Calcula las siguientes sumas 
utilizando cuatro de los cinco números enteros:

Suma todo excepto 1, la suma es. 2+3+4+5 = 14
Suma todo excepto 2, la suma es. 1+3+4+5 = 13
Suma todo excepto 3, la suma es. 1+2+4+5 = 12
Suma todo excepto 4, la suma es. 1+2+3+5 = 11
Suma todo excepto 5, la suma es. 1+2+3+4 = 10 */

const arr = [1, 2, 3, 4, 5];

function minMaxSum(arr) {
  let sumArr = 0;
  let auxArr = [];
  for (let index = 0; index < arr.length; index++) {
    for (let index2 = 0; index2 < arr.length; index2++) {
      if (index2 != index) {
        sumArr += arr[index2];
      }
    }
    auxArr.push(sumArr);
    sumArr = 0;
  }

  const max = Math.max(...auxArr);
  const min = Math.min(...auxArr);

  console.log(max, min);
}

minMaxSum(arr);

class LargestProduct {
  constructor(number) {
    // ex: 1234567890
    // ["1", "2", "3", "4", "5"] = 120
    // ["2", "3", "4", "5", "6"] = 720
    // ...

    // change to string, split into array
    // for loop or while loop? through array
    // take first 5 index/position, multiply
    // take second 5, multiply ...
    // check if new product is larger than previous, if largest, return product and return 1st index/position of that array

    this.number = number;
    // this.largestProduct = 0;
    // this.largestProductPosition = 0;
    let product = 0;
    let position = 0;

    let numArr = this.number.toString().split("");

    // loop through entire array
    for (let i = 0; i < numArr.length; i++) {
      // create arrays with 5 nums
      let fiveNums = numArr.slice(i, i + 5);
      let current = 1;
      // loop through 5 num array and multiply
      for (let j = 0; j < fiveNums.length; j++) {
        current *= fiveNums[j];
      }

      // if current product is greater than largest product, let largest product = current product
      if (current > product) {
        product = current;
        position = i;
      }
    }
    this.product = product;
    this.position = position;
  }

  getLargestProductIndex() {
    return this.position;
  }

  getLargestProduct() {
    return this.product;
  }
}

module.exports = LargestProduct;

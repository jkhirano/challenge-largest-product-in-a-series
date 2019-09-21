class LargestProduct {
  constructor(number) {
    this.number = number;
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

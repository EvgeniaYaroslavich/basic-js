const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    let maxDepth = 1;
    arr.forEach((v) => {
      let depth = 1;
      if (Array.isArray(v)) {
          depth = 1 + this.calculateDepth(v);
      }
      maxDepth = Math.max(depth, maxDepth);
    });
    return maxDepth;
    
  }
};
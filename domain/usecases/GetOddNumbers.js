// GetOddNumbers.js
class GetOddNumbers {
    constructor(oddNumbersController) {
      this.oddNumbersController = oddNumbersController;
    }
  
    async execute(req, res) {
      return this.oddNumbersController.getOddNumbers(req, res);
    }
  }
  
  module.exports = GetOddNumbers;
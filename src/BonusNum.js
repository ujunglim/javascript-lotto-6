import Validator from "./utils/Validator.js";

class BonusNum {
  #num;

  constructor(input) {
    this.#validate(input);
    this.#num = input;
  }

  #validate(input) {
    Validator.isNum(input);
    Validator.checkRange(input);
  }

  returnNum() {
    return this.#num;
  }
}

export default BonusNum;

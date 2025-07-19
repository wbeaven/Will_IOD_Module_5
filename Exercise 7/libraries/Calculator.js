const Logger = require("./Logger");

class Calculator {
    constructor() {
        this.id = Math.floor(Math.random() * 1_000_000); // Part 2: Random ID
        this.logger = new Logger();
    }

    add(num1, num2) {
        const result = num1 + num2;
        this.logger.log(this.id, `add(${num1}, ${num2}) = ${result}`);
        return result;
    }

    subtract(num1, num2) {
        const result = num1 - num2;
        this.logger.log(this.id, `subtract(${num1}, ${num2}) = ${result}`);
        return result;
    }

    multiply(num1, num2) {
        const result = num1 * num2;
        this.logger.log(this.id, `multiply(${num1}, ${num2}) = ${result}`);
        return result;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            this.logger.log(this.id, `divide(${num1}, ${num2}) = Error (Division by zero)`);
            return "Error: Division by zero";
        }
        const result = num1 / num2;
        this.logger.log(this.id, `divide(${num1}, ${num2}) = ${result}`);
        return result;
    }
}
module.exports = Calculator;

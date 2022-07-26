export function foo() {
  console.log('Hello world!');
}

const add: (num1: number, num2: number) => number = (
  num1: number,
  num2: number
): number => num1 + num2;
export default add;

export function operation(num1: number): void {
  this.num = num1;

  this.add = function (num2: number): object {
    this.num += num2;
    return this;
  };

  this.sub = function (num2: number): object {
    this.num -= num2;
    return this;
  };
  this.mul = function (num2: number): object {
    this.num *= num2;
    return this;
  };

  this.div = function (num2: number): object {
    this.num /= num2;
    return this;
  };
}

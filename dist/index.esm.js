 /* https://github.com/gd-cho/test-utils */
function foo() {
  console.log('Hello world!');
}

var add = function add(num1, num2) {
  return num1 + num2;
};
function operation(num1) {
  this.num = num1;

  this.add = function (num2) {
    this.num += num2;
    return this;
  };

  this.sub = function (num2) {
    this.num -= num2;
    return this;
  };

  this.mul = function (num2) {
    this.num *= num2;
    return this;
  };

  this.div = function (num2) {
    this.num /= num2;
    return this;
  };
}

export { add as default, foo, operation };

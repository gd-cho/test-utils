const path = require('path');

module.exports = {
  // 根路径，指向项目根路径
  rootDir: path.resolve(__dirname, '../../'),
  // jest寻找的路径数组，添加项目根路径
  roots: [path.resolve(__dirname, '../../')],
  // ts-jest用于支持typescript, babel-jest用于支持ES6模块化语法
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  // 测试文件匹配正则
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  // 测试文件内可省略的文件后缀
  moduleFileExtensions: ['ts', 'js'],
  // 显示测试内容
  verbose: true,
};

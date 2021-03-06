/**
 * * 题目名称：左旋转字符串
 * * 题目地址：https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

 

示例 1：

输入: s = "abcdefg", k = 2
输出: "cdefgab"
示例 2：

输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"

 */

// * 思路：

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  // return s.slice(n) + s.slice(0, n)
  return s.substring(n) + s.substring(0, n)
};

// * 解法一：模拟实现 slice

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords1 = function(s, n) {
  String.prototype.mySlice = function(start, end){
  let res = ''
  end = typeof end == 'undefined' ? this.length : end
  for(let i = 0; i < this.length; i++){
    if(i>=start && i<end){
      res += this[i]
    }
  }
  return res
}
  return s.mySlice(n) + s.mySlice(0, n)
};



// 测试用例
let test = "abcdefg", n = 2

console.time('执行用时');
console.log(reverseLeftWords1(test, n));
console.timeEnd('执行用时');
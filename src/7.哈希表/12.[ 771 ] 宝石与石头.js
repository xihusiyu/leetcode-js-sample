/**
 * * 题目名称：宝石与石头
 * * 题目地址：https://leetcode-cn.com/problems/jewels-and-stones
 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

示例 1:

输入: J = "aA", S = "aAAbbbb"
输出: 3
示例 2:

输入: J = "z", S = "ZZ"
输出: 0
 */

// * 思路：使用哈希表分分钟解决

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const set = new Set(jewels)
  // let res = 0
  // for (let stone of stones) {
  //   if (set.has(stone)) res++
  // }
  // return res
  // ! 前方高能写法
  return stones.split('').reduce((prev, val) => {
    return prev + set.has(val);
  }, 0);
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');
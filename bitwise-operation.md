# 位运算

* 按位与(&)
  * 对应位上的两个数都为1时，结果为1；否则结果为0
  * 例如：
    * 0011 & 0101 = 0001

* 按位或(|)
  * 对应位上的两个数都为0时，结果为0；否则结果为1
  * 例如：
    * 0011 | 0101 = 0111

* 按位异或(^)
  * 对应位上的两个数值相同时，结果为0；否则结果为1
  * 例如：
    * 0011 ^ 0101 = 0110

* 按位取反(~)
  * 对应位上的数字取反，0变为1，1变为0
  * 例如：
    * ~0011 = 1100
    * ~0101 = 1010

* 左移(<<)
  * 左移运算符是将一个数字的各个位向左移动若干位，由"<<"表示，移位的位数由后面的数字指定
  * 例如：
    * 0011 << 1 = 0110
    * 0011 << 2 = 1100
    * 0011 << 3 = 11000

* 右移(>>)
  * 右移运算符是将一个数字的各个位向右移动若干位，由">>"表示，移位的位数由后面的数字指定
  * 例如：
    * 0011 >> 1 = 0001
    * 0011 >> 2 = 0000
    * 0011 >> 3 = 00000

* 判断奇偶
  * 奇数：n & 1 === 1
  * 偶数：n & 1 === 0

* 消除最右边的1
  * x & (x - 1)

* 得到最右边的1
  * x & -x

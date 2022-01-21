## 数据结构与算法
* 链表
  + 一个链表是数据元素的线性集合，元素的线性顺序不是由他们在内存中的物理位置给出的。相反，每个元素指向下一个元素。它是由一组节点组成的数据结构，这些节点一起，表示序列
  + 在最简单的形式下，每个节点由数据和到序列中下一个节点的引用组成。这种结构允许在迭代期间有效地从序列中的任何位置插入或者删除元素
  + 更复杂的变体添加额外的链接，允许有效地插入或删除任意元素引用。链表的一个缺点是访问时间是线性的，而且难以管道化
  + 更快的访问，如随机访问，是不可行的。与链表相比，数组具有更好的缓存位置

* 双向链表
  + 一个双向链表是由一组称为节点的顺序链接记录组成的链接数据结构。每个节点包含两个字段，称为链接，它们是对节点序列中上一个节点和下一个节点的引用。开始节点和结束节点的上一个链接和下一个链接分别指向某种终止节点，通常是前哨节点或null，以方便遍历列表。如果只有一个前哨节点，则列表通过前哨节点循环链接。它可以被概念化为两个由相同数据项组成的单链表，但顺序相反
  + 两个节点链接允许在任一方向上遍历列表
  + 在双向链表中进行添加或者删除节点时，需做的链接更改要比单向链表复杂得多。这种操作在单向链表中更简单高效，因为不需要关注一个节点(除第一个和最后一个以外的节点)的两个链接，而只需要关注一个链接即可

* 队列
  + 一个队列是一种特殊类型的抽象数据类型或集合。集合中的实体按顺序保存
  + 队列基本操作有两种：入队和出队。当队列的后端位置添加实体，称为入队；从队列的前端位置移除实体，称为出队
  + 队列中元素顺序是先进先出

* 栈
  + 一个栈是一种抽象数据类型，用作表示元素的集合，具有两种主要操作：
    * push，添加元素到栈的顶端(末尾)
    * pop，移除栈最顶端(末尾)的元素
    以上两种操作可以简单概括为后进先出
  + 此外，应有一个`peek`操作用于访问执行站当前顶端(末尾)的元素
  + 栈 这个名词，可类比于一组物体的堆叠

* 堆
  + 一个堆是一种特殊的基于数的数据结构，它满足下面描述的堆属性
    * 在一个最小堆中，如果p是c的一个父级节点，那么p的key(或value)应小于或等于c的对应值
    * 在一个最大堆中，p的key(或value)大于c的对应值

* 哈希表(散列)
  + 在计算中，一个哈希表(hash table 或 hash map)是一种实现关联数组的抽象数据类型，该结构可以将键映射到值
  + 哈希表使用哈希函数/散列函数来计算一个值在数组或桶中或槽中对应的索引，可使用该索引找到所需的值
  + 理想情况下，散列函数将为每个键分配给一个唯一的桶，但是大多数哈希表设计采用不完美的散列函数，这可能会导致哈希冲突，也就是散列函数为多个键生成了相同的索引，这种碰撞必须以某种方式进行处理

* 指针
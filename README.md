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

* 二叉树
  + 种类
    - 完全二叉树  
      满足条件  
      + 所有叶子节点都出现在k或者k-1层，而且从1到k-1层必要达到最大节点数
      + 第k层可以不是满的，但是第k层的所有节点必须集中在最左边。
      + 完全二叉树不要求所有树都有左右子树
      + 任何一个节点不能只有左子树没有右子树
      + 叶子节点出现在最后一层或者倒数第二层，不能在往上  
      应用场景  
        完全二叉树的特点是：叶子节点的位置比较规律。因此在对数据进行排序或者查找时可以用到它，比如堆排序就使用了它
    - 平衡二叉树(AVL树)  
      + 平衡二叉树的提出就是为了保证树不至于太倾斜，尽量保证两边平衡，因此它的定义如下：
        - 平衡二叉树要么是一颗空树
        - 要么保证左右子树的高度只差不大于1
        - 子树也必须是一颗平衡二叉树
      + 平衡二叉树在添加和删除时需要进行旋转保持整个树的平衡，内部做了这么复杂的工作，我们使用它时，插入、查找的时间复杂度都是O(logn)，性能相当好了
    - 二叉查找树
      + 二叉树的剔除其实主要就是为了提高查找效率，比如我们常用的HashMap在处理哈希冲突严重时候，拉链过长导致查找效率降低，就引入了红黑树
      + 二分查找可以缩短查找的时间，但是它要求查找的数据必须是有序的。每次查找、操作时都要维护一个有序的数据集，于是有了二叉查找树这个概念
      + 二叉查找树(又叫二叉排序树)，它是具有下列性质的二叉树：
        - 若左子树不空，则左子树上所有节点的值均小于它的根节点的值
        - 若右子树不空，则右子树上所有节点的值均大于或等于它的根节点的值
        - 左、右子树也分别为二叉排序树
      + 二叉排序树的性能
        - 在最好的情况下，二叉排序树的查找效率比较高，是O(logn)，其访问性能近似于折半查找
        - 最差的时候会是O(n)，比如插入的元素是有序的，生成的二叉排序树就是一个链表，这种情况下，需要遍历全部元素才行
        - 如果我们可以保证二叉排序树不出现上面的极端情况(插入的元素是有序的，导致变成一个链表)，就可以保证很高的效率了
  + 遍历
    - 前序遍历 根 -> 左 -> 右
    - 中序遍历 左 -> 根 -> 右
    - 后序遍历 左 -> 右 -> 根

* 指针
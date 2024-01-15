class IListNode {
  public val: number
  public next: IListNode | null

  constructor(val?: number, next?: IListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

/**
 * 设计链表
 */
class MyLinkedList {
  private size: number
  private head: IListNode | null
  private tail: IListNode | null

  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  // 获取链表中第index个节点的值
  get(index: number): number {
    if (index < 0 || index >= this.size) return -1
    return this.getNode(index).val
  }

  // 在链表的第一个元素之前添加一个值为val的节点。插入后，新节点将成为链表的第一个节点。
  addAtHead(val: number): void {
    let node: IListNode = new IListNode(val, this.head)
    this.head = node
    if (!this.tail) {
      this.tail = node
    }
    this.size++
  }

  // 将值为val的节点追加到链表的最后一个元素
  addAtTail(val: number): void {
    let node: IListNode = new IListNode(val, null)

    if (this.tail) {
      this.tail.next = node
    }
    // 如果没有尾节点，说明一个节点还没有
    else {
      this.head = node
    }

    this.tail = node
    this.size++
  }

  // 在链表中的第index个节点之前添加值为 val的节点
  addAtIndex(index: number, val: number): void {
    // 如果 index等于链表的长度，则该节点将附加到链表的末尾
    if (index === this.size) {
      this.addAtTail(val)
      return
    }

    // 如果 index大于链表长度，则不会插入节点
    if (index > this.size) return

    // 如果 index小于0，则在头部插入节点
    if (index <= 0) {
      this.addAtHead(val)
      return
    }

    let curNode: IListNode = this.getNode(index - 1)
    let node: IListNode = new IListNode(val, curNode.next)
    curNode.next = node
    this.size++
  }

  // 如果索引index有效，则删除链表中的第index个节点
  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return

    // 处理头结点
    if (index === 0) {
      this.head = this.head!.next
      if (index === this.size - 1) {
        this.tail = null
      }
      this.size--
      return
    }

    let node: IListNode = this.getNode(index - 1)
    node.next = node.next!.next

    if (index === this.size - 1) {
      this.tail = node
    }

    this.size--
  }

  // 获取指定Node节点
  private getNode(index: number): IListNode {
    let node: IListNode = new IListNode(0, this.head)
    while (index-- >= 0) {
      node = node.next!
    }
    return node
  }
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
myLinkedList.get(1);              // 返回 2
myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
myLinkedList.get(1);              // 返回 3
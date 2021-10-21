export interface List<E> {

    clear();                                  //清除所有元素
    size(): number;                           //获取元素的数量
    isEmpty(): boolean;                       //判断是否为空
    contains(element: E): boolean;            //是否包含某个元素
    add(element: E);                          //添加元素到尾部
    get(index: number): E;                    //获取index位置的元素
    set(index: number, element: E): E;        //设置index位置的元素
    addToIndex(index: number, element: E);    //在index位置插入一个元素
    remove(index: number): E;                 //删除index位置的元素
    indexOf(element: E): number;              //查看元素的索引
    ensureCapacity(capacity: number);         //保证要有capacity的容量

}


Min Heap - Complete Binary Tree (all nodes fille, except maybe the right-most elements on the last level), where each node is smaller than its children

efficient way to store and look up data that must maintain order

heap property: the child is greater than or equal to the parent node for a minimum heap 

* nodes are filled left to right

Main operations: 

Insert: Always start  by inserting the element at the bottom. 

1) Insert at the most right-most spot (end of the array)
2) "Fix" tree, by swapping the new element with its parent element (bubble up the min element)
O(log n) time - n is the number of nodes in tree

Get-Min: Always the top element
1) Remove min element and swap it with the last element in the heap (bottom-most, right-most element)
2) Bubble down the swapped element by swapping it with one of it's children (**best to do it with the smallest child to maintain the min heap order**) until min-heap is back in order

Delete: Always the top element

Example:

How to locate parent and child nodes:

Use an array:
3, 1, 6, 5, 2, 4

Left child is parent index * 2 + 1 -> if parent is node 1, left child is 1 * 2 + 1 => index 3 => 5)
Right child is parent index * 2 + 2 -> if parent node 1, right child is 1 * 2 + 2 => index 4 => 2)
Parent node of a child is (index - 1) / 2 rounded down => Math.floor((index - 1) / 2) 

1) Add first element to an empty heap
2) ***Add elements from top to bottom, left to right
3) When a new element is added, check with the parent to see if it needs to move up or not and once moved check with the parent again


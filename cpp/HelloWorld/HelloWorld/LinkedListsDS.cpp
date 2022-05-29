//
//  LinkedListsDS.cpp
//  HelloWorld
//
//  Created by Klay Anthony Clarke on 5/29/22.
//
// what is a linked list?
// not the same as an array - each element has the address to the next
// data structure used to store and organize data
// unlike arrays, linked lists are non-continous (in fact, they are randomly positioned)
// how do you access els of a linked list?
// must link els of linked list to be able to locate them
// e.g, first el has link to second el via pointers
// each el stores two things: (1) value of el, (2) pointer to next
// last el stores the value of null (no next el)

#include <iostream>

class Node { // members private by default -- use public access mod to bypass
public:
	int Value;
	Node* Next;
};

void printList(Node*n) {
	while(n != NULL) {
		std::cout << n -> Value << std::endl;
		n = n -> Next;
	}
}

int main()
{
	// three pointers to three nodes
	Node* head = new Node();
	Node* second = new Node();
	Node* third = new Node();
	Node* fourth = new Node();
	
	// to link els of list
	head -> Value = 1;
	head -> Next = second;
	second -> Value = 2;
	second -> Next = third;
	third -> Value = 3;
	third -> Next = fourth;
	fourth -> Value = 4;
	fourth -> Next = NULL;
	
	printList(head);
	
	return 0;
}

// must create own data type for els of linked list

// advantages??
// linked lists has dynamic sizes
// arrays have fixed size

// disadvantages??
// random access not allowed
// how to access fourth el? can't, don't know where it is
// takes more mem than array (two vals vs one)

// neither array nor linked list is better
// there is only "better" for current situation

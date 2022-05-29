//
//  main.cpp
//  HelloWorld
//
//  Created by Klay Anthony Clarke on 5/28/22.
//

#include <iostream>
using namespace std;

int main() {
	cout << "This is the start of a better future\n";
	string fruit="apple";
	string fruits[5]={"apple", "orange", "pear", "strawberry", "banana"};
	for(int i=0;i<5;i++){
		cout << fruits[i]<<endl;
	}
	return 0;
}

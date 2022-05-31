//
//  Arrays2.cpp
//  HelloWorld
//
//  Created by Klay Anthony Clarke on 5/29/22.
//

// add ability to replay

#include <iostream>

int main()
{
	int size;
	std::cout << "Enter the desired array size: " << std::endl;
	std::cin >> size;
	float monthsArray[size];
	
	size_t len = sizeof(monthsArray) / sizeof(monthsArray[0]);
	
	float total = 0;
	
	for(int i = 0; i < len; i++){
		std::cout << "Enter amount for month " << i + 1 << std::endl;
		std::cin >> monthsArray[i];
		total = total + monthsArray[i];
	}
	
	float average = total / len;
	
	float inTwoYears = average * 24;
	
	std::cout << "total: " << total << std::endl;
	std::cout << "average: " << average << std::endl;
	std::cout << "inTwoYears: " << inTwoYears << std::endl;

  std::cout << "wrong" << std::endl;
  std::string name = "Klay";

  return 0;
}

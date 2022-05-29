////
////  Factorial.cpp
////  HelloWorld
////
////  Created by Klay Anthony Clarke on 5/28/22.
////
//
//// what is the factorial of a number?
//// the product of a number multiplied by the numbers less than said number
//
//#include <iostream>
//
//int main()
//{
//	// the factorial of a number
//	// 6!=1*2*3*4*5*6=720
//	
//	int number;
//	std::cout << "Number: ";
//	std::cin >> number;
//	
//	while(number < 0) {
//		std::cout << "no negative values allowed. please try again" << std::endl;
//		std::cout << "Number: ";
//		std::cin >> number;
//	}
//	
//	int factorial = 1;
//	
////	6!=1*2*3*4*5*6
////	for (int i = 1; i <= number; i++) { // i = 1
////		factorial = factorial * i;
////	}
//	
////	6!=6*5*4*3*2*1
//	for (int i = number; i >= 1; i--) { // if user passes 6, i = 6 to start
//		factorial = factorial * i;
//	}
//	std::cout << number << "!=" << factorial << std::endl;
//}

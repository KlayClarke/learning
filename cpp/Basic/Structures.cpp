////
////  Structures.cpp
////  HelloWorld
////
////  Created by Klay Anthony Clarke on 5/28/22.
////
//
//// what are structures?
//// - user defined data types
//// -members public by default
//
//#include <iostream>
//
//struct Smartphone {
//	std::string name;
//	int storageSpace;
//	std::string color;
//	float price;
//}; // must have semi colon at end
//
//struct Person {
//	std::string name;
//	int age;
//	Smartphone smartphone;
//};
//
//void printSmartphoneInfo(Smartphone smartphone);
//void printPersonInfo(Person person);
//void printListOfPhones()
//
//int main()
//{
////	std::string name = "iPhone 12";
////	int storageSpace = 32;
////	std::string color = "black";
////	float price = 1999.99;
////
////	std::string name2 = "Samsung Galaxy S21 Ultra";
////	int storageSpace2 = 64;
////	std::string color2 = "gray";
////	float price2 = 888.88;
//	
//	Smartphone smartphone; // to create variable of type "Smartphone" with necessary values
//	smartphone.name = "iPhone 12";
//	smartphone.storageSpace = 32;
//	smartphone.color = "black";
//	smartphone.price = 999.99;
//	
//	Smartphone smartphone2;
//	smartphone2.name = "Samsung Galaxy S21 Ultra";
//	smartphone2.storageSpace = 64;
//	smartphone2.color = "gray";
//	smartphone2.price = 888.88;
//	
//	printSmartphoneInfo(smartphone);
//	printSmartphoneInfo(smartphone2);
//	
//	Person p;
//	p.name = "Klay";
//	p.age = 23;
//	p.smartphone = smartphone;
//	
//	printPersonInfo(p);
//	
//	
//}
//
//void printSmartphoneInfo(Smartphone smartphone) {
//	std::cout << "name: " << smartphone.name << std::endl; // string concatenation
//}
//
//void printPersonInfo(Person person) {
//	std::cout << "name: " << person.name << std::endl;
//	std::cout << "smartphone: ";
//	
//	printSmartphoneInfo(person.smartphone);
//}

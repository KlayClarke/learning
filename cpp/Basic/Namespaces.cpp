#include <iostream>
#include "NamespacesHeader.h"
// using namespace std; // bad practice (global vars)
// better to do the following:
using std::cout;
using std::endl;

void greeting();

int main() {
  humans::greeting();
  aliens::greeting();

  std::cout << "This is without std namespace." << std::endl;
  cout << "This is with std namespace." << std::endl;

  return 0;
}

// void greeting() {
//   std::cout << "Hello Humans!!" << std::endl;
// }

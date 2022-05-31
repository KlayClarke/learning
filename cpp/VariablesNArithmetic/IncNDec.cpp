#include <iostream>
using namespace std;

int main(){
  int x(2), y(5), z(7);
  int temp = 0;

  cout << temp << endl; // prints 0 to console
  cout << --temp << endl; // decrements temp and prints it to console : -1
  cout << ++temp << endl; // increments temp and prints it to console : 0
  return 0;
}
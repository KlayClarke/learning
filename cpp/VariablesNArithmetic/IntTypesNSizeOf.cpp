#include <iostream>
using namespace std;

/*
 * one byte = 8 bits
 * the more bits allocated, the more values can be represented
 * more bits means more memory
 * choose wisely to minimize memore usage -> please use only what you need
 *
 */

int main() {
  int i;
  cout << sizeof(int) << endl;
  // or
  cout << sizeof(i) << endl;

  // to check the boundaries of each type
  cout << sizeof(INT16_MIN) << endl;
  cout << sizeof(INT16_MAX) << endl;
  return 0;
}
#include <iostream>
using std::cout;
using std::endl;

int main() {
  // uninitialized
  int p;
  // C-style initialization
  int q = 3;
  // constructor initialization
  long r(4230849023);
  // multiple declarations uninitialized
  int x, y, z;
  // initialize variables x, y, z
  x = 0, y = 1, z = 2;
  
  cout << r << endl;

  return 0;
}
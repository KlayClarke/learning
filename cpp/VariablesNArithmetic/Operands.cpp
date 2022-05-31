#include <iostream>
using std::cout;
using std::endl;

int main() {
  // unary arithmetic operators
  int positive = +1;
  cout << positive << endl;
  cout << -positive << endl;
  // binary arithmetic operators
  int width = 3;
  int length = 4;
  int area;
  area = width * length;
  cout << area << endl;
  // assignment operators
  int temp = 2;
  temp += 5 * 3;
  cout << temp << endl;
  return 0;
}
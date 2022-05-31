#include <iostream>
using namespace std;

int main() {
  int x(2), y(5), z(7);

  int temp = y / x;

  cout << "x = " << x << "\ty = " << y << "\tz = " << z << endl;
  cout << "y / x = " << temp << endl;

  temp = y % x;
  cout << "y % x = " << temp << endl;

  return 0;
}
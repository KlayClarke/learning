#include <iostream>
using std::cin;
using std::cout;
using std::endl;

int main() {
  int width;
  int length;
  int area;
  // take user input and save to variable
  cout << "Width: ";
  cin >> width;
  cout << "Length: ";
  cin>> length;
  area= width * length;
  cout << "Area: " << area << endl;
  return 0;
}
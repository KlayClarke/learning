#include <iostream>
using namespace std;

int main() {
  int cakeLeftInt = 0.5;
  float cakeLeftFloat = 0.5;
  cout << cakeLeftInt << endl; // prints 0
  cout << cakeLeftFloat << endl; // prints 0.5

  float tax, taxRate, price;
  taxRate = 0.15;

  cout << "Enter the price: " << endl;
  cin >> price;

  tax = taxRate * price;

  cout << endl << "The Tax is: " << tax << endl; // prints calculated tax to console

  return 0;
}
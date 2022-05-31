#include <iostream>
using namespace std;

int main() {
  const int CONSTANT_NAME = 50; // constant initialization
  int variableName = 54; // literal variable initialization

  const int MONTHS_IN_YEAR = 12;
  float monthlySalary = 0.0f;
  float yearlySalary = 0.0f;

  cout << "enter your monthly salary: $";
  cin >> monthlySalary;

  yearlySalary = monthlySalary * MONTHS_IN_YEAR;

  cout << "Your yearly salary is: $" << yearlySalary << endl;

  cout << endl;

  return 0;
}
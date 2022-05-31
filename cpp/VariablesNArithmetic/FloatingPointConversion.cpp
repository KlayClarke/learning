#include <iostream>
using namespace std;

int main(){
  int enemiesWave1(7), enemiesWave2(6);
  // assuming 2 players
  float enemiesPerPlayer = (enemiesWave1 + enemiesWave2) / 2.0;
  // different from
  float enemiesPerPlayer = (enemiesWave1 + enemiesWave2) / 2.0f;

  // the first sentence was converting from double to float
  


  cout << "Enemies per player: " << enemiesPerPlayer << endl;
  return 0;
}
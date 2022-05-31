#include <iostream>

namespace humans {
  void greeting() {
    std::cout << "Greetings humans from NamespacesHeader.h!!" << std::endl;
  };
};

namespace aliens {
  void greeting() {
    std::cout << "Greetings aliens from NamespacesHeader.h!!" << std::endl;
  }
}

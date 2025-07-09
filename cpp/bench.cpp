#include "common.hpp"
#include <sstream>
#include <string>
#include <vector>

struct DataContainer {
  std::vector<IData *> data;
};

DataContainer container{};

std::string foo() {
  for (int i = 0; i < 1000; i = i + 1) {
    container.data.push_back(new OneInt{i});
    container.data.push_back(new TwoInt{i, i + 1});
    container.data.push_back(new OneStr{"Hello"});
  }
  std::stringstream ss;
  for (size_t i = 0; i < container.data.size(); ++i) {
    ss << container.data[i]->getString();
  }
  return ss.str();
}

std::string result;
int main() {
  result = foo() + foo() + foo();
  result = foo() + foo() + foo();
  result = foo() + foo() + foo();
  result = foo() + foo() + foo();
  result = foo() + foo() + foo();
  result = foo() + foo() + foo();
  result = foo() + foo() + foo();
  result = foo() + foo() + foo();
  result = foo() + foo() + foo();
  result = foo() + foo() + foo();
  result = foo() + foo() + foo();
  result = foo() + foo() + foo();
}

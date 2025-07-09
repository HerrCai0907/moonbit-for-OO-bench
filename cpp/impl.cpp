#include "common.hpp"

std::string OneInt::getString() const { return std::to_string(value); }

std::string TwoInt::getString() const {
  return std::to_string(v0) + "," + std::to_string(v1);
}

std::string OneStr::getString() const { return value; }

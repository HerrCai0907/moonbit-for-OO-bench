#pragma once

#include <string>

struct IData {
  virtual std::string getString() const = 0;
};

struct OneInt : IData {
  int32_t value;
  OneInt(int v) : value(v) {}
  std::string getString() const override;
};

struct TwoInt : IData {
  int32_t v0;
  int32_t v1;
  TwoInt(int a, int b) : v0(a), v1(b) {}
  std::string getString() const override;
};

struct OneStr : IData {
  std::string value;
  OneStr(const char *str) : value(str) {}
  std::string getString() const override;
};

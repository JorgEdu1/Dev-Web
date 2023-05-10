#include <iostream>
#include "data.h"

int main(){
    Data data1(5, 29, 2002);
    Data data2(5, 29, 2002);
    Data data3(5, 29, 2002);
    if(data2 >= data1 && data2 <= data3)
        std::cout << "esta no intervalo." << std::endl;
    else
        std::cout << "nao esta no intervalo." << std::endl;
}
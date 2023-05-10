#ifndef DATA_H
#define DATA_H

#include <string>

class Data {
public:
    Data(int mes, int dia, int ano);

    int getMes() const;
    int getDia() const;
    int getAno() const;

    void setMes(int mes);
    void setDia(int dia);
    void setAno(int ano);

    std::string toString() const;//retorna uma string no formato mm/dd/aaaa

    //bool range(const Data& piso, const Data& teto) const;//retorna true se a data estiver entre piso e teto
    bool operator<(const Data& outraData) const;//retorna true se a data for menor que outraData
    bool operator>(const Data& outraData) const;//retorna true se a data for maior que outraData
    bool operator==(const Data& outraData) const;//retorna true se a data for igual a outraData
    bool operator>=(const Data& outraData) const;//retorna true se a data for maior ou igual a outraData
    bool operator<=(const Data& outraData) const;//retorna true se a data for menor ou igual a outraData
    friend std::ostream& operator<<(std::ostream& os, const Data& data);//retorna uma string no formato mm/dd/aaaa

private:
    int m_mes;
    int m_dia;
    int m_ano;

};
#endif
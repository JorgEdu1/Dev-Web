#include "data.h"
#include <iostream>
#include <sstream>

using namespace std;

Data::Data(int mes, int dia, int ano) {
    m_mes = mes;
    m_dia = dia;
    m_ano = ano;
}

int Data::getMes() const {
    return m_mes;
}

int Data::getDia() const {
    return m_dia;
}

int Data::getAno() const {
    return m_ano;
}

void Data::setMes(int mes) {
    m_mes = mes;
}

void Data::setDia(int dia) {
    m_dia = dia;
}

void Data::setAno(int ano) {
    m_ano = ano;
}

std::string Data::toString() const {
    std::stringstream ss;
    ss << m_mes << "/" << m_dia << "/" << m_ano;
    return ss.str();
}

bool Data::operator<(const Data& outraData) const {
    if (m_ano < outraData.m_ano)
        return true;
    else if (m_ano == outraData.m_ano && m_mes < outraData.m_mes)
        return true;
    else if (m_ano == outraData.m_ano && m_mes == outraData.m_mes && m_dia < outraData.m_dia)
        return true;
    else
        return false;
}

bool Data::operator>(const Data& outraData) const {
    if (m_ano > outraData.m_ano)
        return true;
    else if (m_ano == outraData.m_ano && m_mes > outraData.m_mes)
        return true;
    else if (m_ano == outraData.m_ano && m_mes == outraData.m_mes && m_dia > outraData.m_dia)
        return true;
    else
        return false;
}

bool Data::operator==(const Data& outraData) const {
    if (m_ano == outraData.m_ano && m_mes == outraData.m_mes && m_dia == outraData.m_dia) {
        return true;
    }
    return false;
}

bool Data::operator>=(const Data& outra) const {
    return (*this > outra || *this == outra);
}

bool Data::operator<=(const Data& outra) const {
    return (*this < outra || *this == outra);
}

ostream& operator<<(ostream& output, const Data& d) {
    
    int mes = d.getMes();
    int dia = d.getDia();

    output << ((mes < 10) ? ("0" + to_string(mes)) : to_string(mes)) << "/" << ((dia < 10) ? ("0" + to_string(dia)) : to_string(dia)) << "/" << to_string(d.m_ano);

    return output;
}

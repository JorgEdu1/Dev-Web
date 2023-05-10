#include <iostream>
#include "pessoa.h"

using namespace std;

Pessoa::Pessoa(const string& nome, const Data& nascimento, const string& cpf) {
    this->nome = new string(nome);
    this->dataNascimento = new Data(nascimento);
    this->cpf = new string(cpf);
}

string Pessoa::getNome() const {
    return *nome;
}

Data Pessoa::getNascimento() const {
    return *dataNascimento;
}

string Pessoa::getCPF() const {
    return *cpf;
}

void Pessoa::setNome(string& nome) {
    this->nome = new string(nome);
}

void Pessoa::setNascimento(Data& nascimento) {
    this->dataNascimento = new Data(nascimento);
}

void Pessoa::setCPF(string& cpf) {
    this->cpf = new string(cpf);
}

// bool Pessoa::checkData(const Data& piso, const Data& teto) const {
//     return dataNascimento->range(piso, teto);
// }

string Pessoa::toString() const {
    stringstream ss;
    ss << "Nome: " << *nome << endl;
    ss << "Data de Nascimento: " << *dataNascimento << endl;
    ss << "CPF: " << *cpf << endl;
    return ss.str();
}







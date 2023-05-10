#ifndef PESSOA_H
#define PESSOA_H
#include <string>
#include <sstream>
#include "data.h"

class Pessoa {
public:

    //construtores
    Pessoa() = default;//construtor default
    Pessoa(const Pessoa& p) = default;//construtor de copia
    Pessoa& operator=(const Pessoa& p) = default;//atribuicao default
    Pessoa(const std::string& nome, const Data& nascimento, const std::string& cpf);//construtor com parametros
    
    //gets e sets
    std::string getNome() const;
    Data getNascimento() const;
    std::string getCPF() const;
    void setNome( std::string& nome);
    void setNascimento(Data& nascimento);
    void setCPF(std::string& cpf);


    std::string toString() const;//retorna uma string no formato "nome cpf nascimento"
    //bool checkData(const Data& piso, const Data& teto) const;//retorna true se a data estiver entre piso e teto
    ~Pessoa() = default;//destrutor default
    
private:
    std::string *cpf;
    std::string *nome;
    Data *dataNascimento;
};
#endif
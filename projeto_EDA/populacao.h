#ifndef POPULACAO_H
#define POPULACAO_H

#include <string>
#include <sstream>
#include "data.h"
#include "pessoa.h"
#include "AVLTree.h"
#include <vector>

class Populacao {
    private:
        AVLTree<std::string> *arvoreCPF;//avl de cpf
        AVLTree<std::string> *arvoreNome;//avl de nome
        AVLTree<Data> *arvoreNascimento;//avl de data de nascimento
    public:
        Populacao();//construtor default
        void inserePessoa(Pessoa* pessoa);//adiciona uma pessoa na populacao
        void consultarPessoaCPF(const std::string& cpf);//consulta uma pessoa na populacao por cpf
        void consultarPessoaNome(const std::string& nome);//consulta uma pessoa na populacao se o nome dela tiver a string passada
        void consultarPessoaData(const Data& piso, const Data& teto);//consulta uma pessoa na populacao se a data de nascimento dela estiver entre as datas passadas
        void imprimeArvoreCPF();//imprime a arvore de cpf
        void imprimeArvoreNome();//imprime a arvore de nome
        void imprimeArvoreNascimento();//imprime a arvore de data de nascimento
        void imprimeTodos();//imprime todas as pessoas
        ~Populacao();
};

#endif
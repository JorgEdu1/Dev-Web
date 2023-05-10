#include "populacao.h"
#include "AVLTree.h"
#include <iostream>

using namespace std;
Populacao::Populacao() {
    arvoreCPF = new AVLTree<string>();
    arvoreNome = new AVLTree<string>();
    arvoreNascimento = new AVLTree<Data>();
}

void Populacao::inserePessoa(Pessoa* pessoa) {
    arvoreCPF->add(pessoa->getCPF(), pessoa);
    arvoreNome->add(pessoa->getNome(), pessoa);
    arvoreNascimento->add(pessoa->getNascimento(), pessoa);
}

// void Populacao::removerPessoa(const string& cpf) {
//     //todo
// }


void Populacao::consultarPessoaNome(const string& nome) {
    vector<Pessoa*> pessoas = arvoreNome->searchName(nome);
    if (pessoas.size() > 0) {
        for (auto p : pessoas) {
            cout << p->toString() << endl;
        }
    } else {
        cout << "Pessoa nao encontrada" << endl;
    }
}

void Populacao::consultarPessoaData(const Data& piso, const Data& teto) {
    arvoreNascimento->searchData(piso, teto);
}

void Populacao::consultarPessoaCPF(const string& cpf) {
    Pessoa* p = arvoreCPF->search(cpf);
    if (p != nullptr) {
        cout << p->toString() << endl;
    } else {
        cout << "Pessoa nao encontrada" << endl;
    }
}

void Populacao::imprimeArvoreCPF() {
    arvoreCPF->bshow();
}

void Populacao::imprimeArvoreNome() {
    arvoreNome->bshow();
}

void Populacao::imprimeArvoreNascimento() {
    arvoreNascimento->bshow();
}

void Populacao::imprimeTodos() {
    arvoreCPF->printAll();
    //arvoreNascimento-> bshow();
    //printa o numero de nos da arvore
    cout << "Numero de pessoas: " << endl;
    cout << "arvoreCPF: " << arvoreCPF->size() << endl;
    cout << "arvoreNome: " << arvoreNome->size() << endl;
    cout << "arvoreNascimento: " << arvoreNascimento->size() << endl;
}

Populacao::~Populacao() {
    delete arvoreCPF;
    delete arvoreNome;
    delete arvoreNascimento;
}

#ifndef AVLTREE_H
#define AVLTREE_H
#include <iostream>
#include "pessoa.h"
#include <string>
#include <vector>
#include "data.h"

template<typename T>
class AVLTree {
public:
    AVLTree(){//construtor default
        root = nullptr;
    }
    ~AVLTree(){//destrutor default
        clear();
    }

    void add(T data, Pessoa *pessoa){//adiciona um dado na arvore
        root = addRecursive(root, data, pessoa);
    }

    void remove(T data){//remove um dado da arvore
        root = removeRecursive(root, data);
    }
    void clear(){//limpa a arvore
        clearRecursive(root);
        root = nullptr;
    }
    void bshow(){//mostra a arvore
        bshow(root, "");
    }
    int size(){//retorna o tamanho da arvore
        return sizeRecursive(root);
    }

    Pessoa* search(T data){//procura um dado na arvore
        Node* node = searchRecursive(root, data);
        if(node == nullptr)
            return nullptr;
        return node->pessoa;
    }

    std::vector<Pessoa*> searchName(std::string data){//procura um dado guiado em string na arvore
        std::vector<Pessoa*> pessoas;
        searchNameRecursive(root, data, pessoas);
        return pessoas;
    }

    void searchData(Data piso, Data teto){//procura um dado guiado em intervalo de data na arvore, iterativo
        searchDataRecursive(root, piso, teto);
    }

    void printAll(){//imprime todos os dados da arvore
        PrintAllRecursive(root);
    }
    
private:
    struct Node {//estrutura de um no
        T data;
        int height;
        Node* left;
        Node* right;
        Pessoa* pessoa;

        Node(const T& d, Node* l = nullptr, Node* r = nullptr, Pessoa* p = nullptr)
            : data(d), height(0), left(l), right(r), pessoa(p) {}
    };

    Node* root;
    void bshow(Node* node, std::string heranca){//mostra a arvore
        if(node != nullptr && (node->left != nullptr || node->right != nullptr))
            bshow(node->right , heranca + "r");
        for(int i = 0; i < (int) heranca.size() - 1; i++)
            std::cout << (heranca[i] != heranca[i + 1] ? "│   " : "    ");
        if(heranca != "")
            std::cout << (heranca.back() == 'r' ? "┌───" : "└───");
        if(node == nullptr){
            std::cout << "#" << std::endl;
            return;
        }
        std::cout << node->data << std::endl;
        if(node != nullptr && (node->left != nullptr || node->right != nullptr))
            bshow(node->left, heranca + "l");
    }

    int sizeRecursive(Node* node){//retorna o tamanho da arvore
        if(node == nullptr)
            return 0;
        return 1 + sizeRecursive(node->left) + sizeRecursive(node->right);
    }

    Node* addRecursive(Node* node, T data, Pessoa* pessoa){//adiciona um dado na arvore
        if (node == nullptr) {
            return new Node(data, nullptr, nullptr, pessoa);
        } else if (data <= node->data) {
            node->left = addRecursive(node->left, data, pessoa);
        } else if (data >= node->data) {
            node->right = addRecursive(node->right, data, pessoa);
        } else {
            return node;
        }

        return balance(node);
    }

    Node* findMin(Node* node) const{
        return node->left == nullptr ? node : findMin(node->left);//encontra o menor valor da arvore
    }

    Node* removeRecursive(Node* node, T data){//remove um dado da arvore
        if (node == nullptr) {
            return nullptr;
        } else if (data < node->data) {
            node->left = removeRecursive(node->left, data);
        } else if (data > node->data) {
            node->right = removeRecursive(node->right, data);
        } else {
            if (node->left == nullptr) {
                Node* aux = node->right;
                delete node;
                return aux;
            } else if (node->right == nullptr) {
                Node* aux = node->left;
                delete node;
                return aux;
            } else {
                Node* aux = findMin(node->right);
                node->data = aux->data;
                node->right = removeRecursive(node->right, aux->data);
            }
        }

        return balance(node);
    }

    void clearRecursive(Node* node){//limpa a arvore
        if (node != nullptr) {
            clearRecursive(node->left);
            clearRecursive(node->right);
            delete node;
        }
    }

    int height(Node* node) const{//retorna a altura do nos
        return node == nullptr ? -1 : node->height;
    }

    void updateHeight(Node* node){//atualiza a altura do nos
        node->height = std::max(height(node->left), height(node->right)) + 1;
    }

    int balanceFactor(Node* node) const{//retorna o fator de balanceamento do nos
        return height(node->right) - height(node->left);
    }

    Node* rotateRight(Node* node){//rotaciona a arvore para a direita
        Node* aux = node->left;
        node->left = aux->right;
        aux->right = node;

        updateHeight(node);
        updateHeight(aux);

        return aux;
    }

    Node* rotateLeft(Node* node){//rotaciona a arvore para a esquerda
        Node* aux = node->right;
        node->right = aux->left;
        aux->left = node;

        updateHeight(node);
        updateHeight(aux);

        return aux;
    }

    Node* balance(Node* node){//balanceia a arvore
        if (balanceFactor(node) == 2) {
            if (balanceFactor(node->right) < 0) {
                node->right = rotateRight(node->right);
            }
            return rotateLeft(node);
        } else if (balanceFactor(node) == -2) {
            if (balanceFactor(node->left) > 0) {
                node->left = rotateLeft(node->left);
            }
            return rotateRight(node);
        }

        updateHeight(node);
        return node;
    }

    Node* searchRecursive(Node* node, T data){//procura um dado na arvore
        if (node == nullptr) {
            return nullptr;
        } else if (data < node->data) {
            return searchRecursive(node->left, data);
        } else if (data > node->data) {
            return searchRecursive(node->right, data);
        } else {
            return node;
        }
    }

    bool Substring(Node* node, const std::string& subStr){//veficica se a string esta contida no nome
        std::string str = node->pessoa->getNome().substr(0, subStr.size());
        return str == subStr;
    }

    void searchNameRecursive(Node* node, std::string data, std::vector<Pessoa*> &pessoas){//procura um dado na por meio de string arvore
        if (node == nullptr) {
            return;
        } else if (Substring(node, data)) {
            pessoas.push_back(node->pessoa);
        }
        searchNameRecursive(node->left, data, pessoas);
        searchNameRecursive(node->right, data, pessoas);
    }

    void searchDataRecursive(Node* node, Data piso, Data teto){
        if(node == nullptr) {
            return;
        }else if (node->data >= piso && node->data <= teto){
            std::cout << node->pessoa->toString() << std::endl;
        }
        searchDataRecursive(node->left, piso, teto);
        searchDataRecursive(node->right, piso, teto);
    }

    void PrintAllRecursive(Node* node){//imprime todos os dados da arvore
        if(node == nullptr){
            return;
        }else{
            std::cout << node->pessoa->toString() << std::endl;
        }
        PrintAllRecursive(node->left);
        PrintAllRecursive(node->right);
    }
};

#endif
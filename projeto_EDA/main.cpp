#include <iostream>
#include "pessoa.h"
#include "data.h"
#include "AVLTree.h"
#include "populacao.h"
#include <fstream>
#include <sstream>
#include <string>
using namespace std;


void lerArquivo(std::string nomeArquivo, Populacao &populacao) {
    std::ifstream arquivo(nomeArquivo); // Abre o arquivo para leitura
    std::string linha;

    // Lê a primeira linha (cabeçalho), que não contém informações relevantes
    std::getline(arquivo, linha);

    // Loop para ler cada linha do arquivo
    while (std::getline(arquivo, linha)) {
        std::istringstream ss(linha);
        std::string cpf, nome, sobrenome, data_str, cidade;
        int dia, mes, ano;

        // Extrai cada campo da linha usando getline e stringstream
        std::getline(ss, cpf, ',');
        std::getline(ss, nome, ',');
        std::getline(ss, sobrenome, ',');
        std::getline(ss, data_str, ',');
        std::getline(ss, cidade);

        // Transforma a string da data em um objeto da classe Data
        std::istringstream ss_data(data_str);
        char barra1, barra2;
        ss_data >> mes >> barra1 >> dia >> barra2 >> ano;
        Data data(mes, dia, ano);

        // Imprime os valores lidos
        // std::cout << "CPF: " << cpf << std::endl;
        // std::cout << "Nome: " << nome << " " << sobrenome << std::endl;
        // std::cout << "Data de nascimento: " << data << std::endl;
        // std::cout << "Cidade: " << cidade << std::endl;

        // Cria um objeto da classe Pessoa
        Pessoa* pessoa = new Pessoa(nome + " " + sobrenome, data, cpf);
        
        // Insere a pessoa na árvore
        populacao.inserePessoa(pessoa);
    }

    // Fecha o arquivo
    arquivo.close();
    cout << "Lido!" << endl;
}


int main() {

    int opcao;
    Populacao populacao;

    do {
        system("cls||clear");

        cout << "1 - Ler arquivo" << endl;
        cout << "2 - Consultar pessoa" << endl;
        cout << "3 - Printar todo mundo" << endl; // "debug
        cout << "4 - Sair" << endl;
        cout << "Digite a opcao desejada: ";
        cin >> opcao;

        if (opcao == 1) {
            lerArquivo("data.csv", populacao);
            populacao.imprimeArvoreCPF();
            populacao.imprimeArvoreNome();
            populacao.imprimeArvoreNascimento();
            cout << "Pressione qualquer tecla para continuar...";
            cin.ignore();
            cin.get();
        }
        else if (opcao == 2) {
            system("cls||clear");
            cout << "Selecione o tipo de consulta: " << endl;
            cout << "1 - Por CPF" << endl;
            cout << "2 - Por nome" << endl;
            cout << "3 - Por intervalo de data de nascimento" << endl;
            cout << "4 - Voltar" << endl;
            int opcao1;
            cin >> opcao1;
            system("cls||clear");

            if (opcao1 == 1) {
                string cpf;
                cout << "Digite o CPF da pessoa a ser consultada: ";
                cin >> cpf;
                populacao.consultarPessoaCPF(cpf);
                cout << "Pressione qualquer tecla para continuar...";
                cin.ignore();
                cin.get();
            }
            else if (opcao1 == 2) {
                string nome;
                cout << "Digite o nome da pessoa a ser consultada: ";
                cin.ignore();
                getline(cin, nome);
                populacao.consultarPessoaNome(nome);
                cout << "Pressione qualquer tecla para continuar...";
                cin.ignore();
                cin.get();
            }
            else if (opcao1 == 3) {
                int dia1, mes1, ano1, dia2, mes2, ano2;
                cout << "Digite a data de nascimento inicial (mm/dd/aaaa): ";
                cin >> mes1 >> dia1 >> ano1;
                cout << "Digite a data de nascimento final (mm/dd/aaaa): ";
                cin >> mes2 >> dia2 >> ano2;
                Data data1(mes1, dia1, ano1);
                Data data2(mes2, dia2, ano2);
                populacao.consultarPessoaData(data1, data2);
                cout << "Pressione qualquer tecla para continuar...";
                cin.ignore();
                cin.get();
            }
            else if (opcao1 == 4) {
                continue;
            }
            else {
                cout << "Opcao invalida" << endl;
            }
        }else if(opcao == 3){
            populacao.imprimeTodos();
            cout << "Pressione qualquer tecla para continuar...";
            cin.ignore();
            cin.get();
        }
        else if (opcao == 4) {
            continue;
        }
        else {
            cout << "Opcao invalida" << endl;
        }

    } while (opcao != 4);

    cout << "Fim do programa" << endl;
    cout << "Codigo por: ";
    cout << "Jorge Eduardo Silva Sousa - 542051" << endl;
    cout << "Pressione qualquer tecla para continuar...";
    cin.ignore();
    cin.get();


    return 0;
}
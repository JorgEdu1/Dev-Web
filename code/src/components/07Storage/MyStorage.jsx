const SaveData = () => {
    
    const saveData = () => {
        const aluno = {matricula: "542051",
                       nome: "João da Silva",
                       curso: "Engenharia de Software",}
        localStorage.setItem(aluno.matricula, JSON.stringify(aluno));
    }

    return (
        <>
            <h1>Salvando Dados...</h1>
            {saveData()}
        </>
    )
}

const LoadData = () => {
    const loadData = () => {
        const aluno = JSON.parse(localStorage.getItem("542051"));
        return(
            <>
                <h3>Nome:{aluno.nome}</h3>
                <h3>curso:{aluno.curso}</h3>
            </>
        )
    }
    return (
        <>
            <h1>Carregando Dados...</h1>
            {loadData()}
        </>
    )
}

export {SaveData, LoadData}
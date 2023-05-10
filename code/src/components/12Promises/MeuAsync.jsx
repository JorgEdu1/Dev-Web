const minhaPromessa = new Promise(
    (resolve, reject) => {
        const x = true;
        if (x) {
            resolve('Tudo OK');
        } else {
            reject('Erro');
        }
    }
)

const meuAsync = () => {
    return(
        <>
            <h1>Meu Async</h1>
        </>
    )
}

export default meuAsync;
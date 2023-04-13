const Filho = (props) => {
    return (
        <>
            <h1>Componente Filho</h1>
            <h3>Mesada: {props.mesada}</h3>
            <button onClick={
                () => {
                    //alert("Fui clicado!");
                    props.enviarMensagemProPai("Obrigado por me dar mesada!");
                }
            }>Agradecer ao Pai</button>
        </>
    );
}
export default Filho;
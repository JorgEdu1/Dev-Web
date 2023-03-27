const Temperatura = () => {
    const celsiusParaFahrenheit = (celsius) => {
        return (9*celsius + 160)/5;
    }
    const fahrenheitParaCelsius = (fahrenheit) => {
        return (fahrenheit - 32)*(5/9);
    }
    const kelvin = (kelvin) => {
        const celsius = kelvin - 273
        const fahrenheit = (kelvin - 273)*9/5 + 32
        return {celsius, fahrenheit}
    }
    //main
    const c = 30
    const f = 67
    const k = 0
    return (
        <>
            <h1>Temperatura em {c} Celsius para Fahrenheit é: {celsiusParaFahrenheit(c)}</h1>
            <h1>Temperatura em {f} Fahrenheit para Celsius é: {fahrenheitParaCelsius(f)}</h1>
            <h1>Temperatura em {k} Kelvin é: {JSON.stringify(kelvin(k))}</h1>
        </>
    )
}
export default Temperatura;
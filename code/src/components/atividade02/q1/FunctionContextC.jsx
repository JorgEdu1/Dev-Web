import ColorTheme from "./MyColorContext"
import { useContext } from "react"
import FunctionContextD from "./FunctionContextD"

const FunctionContextC = () => {
    const cores = useContext(ColorTheme);
    return (
        <div>
            <h1 style={{backgroundColor: cores.bkgC}}>Função C</h1>
            <FunctionContextD />
        </div>
    )
}

export default FunctionContextC
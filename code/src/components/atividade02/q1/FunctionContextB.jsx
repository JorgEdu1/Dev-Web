import FunctionContextC from "./FunctionContextC"
import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {
    const cores = useContext(ColorTheme);
    return (
        <div>
            <h1 style={{backgroundColor: cores.bkgB}}>Função B</h1>
            <FunctionContextC />
        </div>
    )
}

export default FunctionContextB
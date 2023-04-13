import ColorTheme from "./MyColorContext"
import { useContext } from "react"

const FunctionContextD = () => {
    const cores = useContext(ColorTheme);
    return (
        <h1 style={{backgroundColor: cores.bkgD}} >Função D</h1>
    )
}

export default FunctionContextD
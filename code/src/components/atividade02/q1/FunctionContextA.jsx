import FunctionContextB from "./FunctionContextB"
//import FunctionContextC from "./FunctionContextC"

import ColorTheme from "./MyColorContext"
//import { useContext } from "react"

const FunctionContextA = () => {
    const cores = {bkgA:"green",bkgB:"white",bkgC:"yellow", bkgD:"blue"}
    return (
        <ColorTheme.Provider value={cores}>
            <div>
                <h1 style={{backgroundColor: cores.bkgA}}>Função A</h1>
                <FunctionContextB/>
            </div>
        </ColorTheme.Provider>
    )
}

export default FunctionContextA
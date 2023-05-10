import { useDispatch } from "react-redux"
import { Decrementar } from "./slice/idSlice"

const BotaoDecrementar = () => {

  const dispatch = useDispatch()

  return (
      <>
           <button onClick={()=>dispatch(Decrementar())} >
              ID - 1
          </button>
      </>
  )
}
export default BotaoDecrementar
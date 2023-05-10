import { useDispatch } from 'react-redux'
import { Incrementar } from './slice/idSlice'

const BotaoIncrementar = () => {
    
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={()=>dispatch(Incrementar())}>
                ID + 1
            </button>
            <button onClick={()=>dispatch(IncrementarValor(10))}>
                ID+10
            </button>
        </>
    )
}
export default BotaoIncrementar
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { decrement, increment } from '../redux/counterSlice'

export default function PageIndex() {
  const router = useRouter()

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const onClickIncrement = () => {
    dispatch(increment())
  }
  const onClickDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
      <h1>
        <span> Hello there, </span>
        Welcome tvmaze-web3 👋
      </h1>
      <div>Count: {count}</div>
      <div>
        <button onClick={onClickIncrement}>Increment</button>
      </div>
      <div>
        <button onClick={onClickDecrement}>Decrement</button>
      </div>
    </>
  )
}

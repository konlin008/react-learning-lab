import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { countAtom } from "./store/atoms/Count";
import { EvenSelector } from "./store/atoms/EvenCounr";



function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  )
}
function Count() {
  console.log("Count rerednder")
  return (
    <>
      <CountRender />
      <Buttons />
      <OddEvenRender />
    </>)
}

function OddEvenRender() {
  const isEvenOdd = useRecoilValue(EvenSelector);
  return (<h5>  {(isEvenOdd == 0) ? "Its Even" : "Its Odd"}</h5>)
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (<>
    <h3>count {count}</h3>
  </>)
}


function Buttons() {
  const [count, setCount] = useRecoilState(countAtom)
  return (<>
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

  </>)
}

export default App

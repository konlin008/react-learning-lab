import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { allNotificaton, jobsAtom, messageAtom, myNetworkAtom, notificationAtom } from "./Atoms"
import { useDebugValue } from "react"

function App() {

  return (
    <RecoilRoot>
      <Topbar />

      <SendMessage />
    </RecoilRoot>
  )
}

function Topbar() {
  const notification = useRecoilValue(notificationAtom)
  const jobs = useRecoilValue(jobsAtom)
  const message = useRecoilValue(messageAtom)
  const myNetwork = useRecoilValue(myNetworkAtom)
  const myNotificatons = useRecoilValue(allNotificaton)
  return (
    <div>
      <button>Home</button>
      <button>Notification({notification})</button>
      <button>Jobs({jobs})</button>
      <button>Message({message})</button>
      <button>My Network({myNetwork >= 100 ? "99+" : myNetwork})</button>
      <button>Me({myNotificatons})</button>
    </div>
  )
}

function SendMessage() {
  const [message, setMessage] = useRecoilState(messageAtom)
  return (
    <div>
      <button onClick={() => {
        setMessage(message + 1)
      }}>Send Message</button>
    </div>
  )
}


export default App

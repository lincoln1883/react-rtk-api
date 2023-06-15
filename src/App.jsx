import './App.css'
import { UserView } from './features/user/userView'
import { IceCreamView } from './features/icecream/icecreamView'
import { CakeView } from './features/cake/cakeView'

function App() {

  return (
    <>
      <CakeView/>
      <IceCreamView/>
      <UserView/>
    </>
  )
}

export default App

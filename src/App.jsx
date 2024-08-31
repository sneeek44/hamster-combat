import ClickerButton from "./components/ClickerButton"
import CountDisplay from "./components/CountDisplay"
import TapUpgrade from "./components/upgrades/TapUpgrade"
import { TapProvider } from "./context/TapContext"

function App() {
  return (
    <>
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen w-screen">
      <CountDisplay />
      <TapProvider>
        <div className="grid place-items-center mt-8">
          <ClickerButton />
        </div>
        <div className="grid place-items-center mt-8">
          <TapUpgrade />
        </div>
      </TapProvider>
    </div>
    </>
  )
}

export default App

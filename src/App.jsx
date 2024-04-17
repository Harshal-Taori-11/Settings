import Frm from "./components/Frm";
import ImgSlogan from "./components/ImgSlogan";

function App() {

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-5xl font-semibold text-cyan-700">Elderly Care Hub: Your Health Partner</h1>
      <br></br>
      <h2 className="text-2xl">----Empowering Senior Health and Comprehensive Care Solutions----</h2>
      <ImgSlogan></ImgSlogan>
      <Frm></Frm>
    </div>
  )
}

export default App

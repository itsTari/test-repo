import React,{useState} from 'react'
// import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import Sphere from './components/FirstComp'
import Light from './components/SecondComp'
import GroundPlane from './components/ThirdComp'
import BackDrop from './components/FourthComp'
import FillLight from './components/FifthComp'
import RimLight from './components/SixthComp'

const App = () => {
  const [lightColor, setLightColor] = useState()
    const handleclick =()=>{
        setLightColor(Math.random() * 0xffffff)
    }
  return (
    <>
     <Canvas> 
       <GroundPlane/>
       <BackDrop/>
        <Light brightness={10} color={lightColor}/>
        <FillLight brightness={40} color='#bdeff'/>
        <RimLight brightness={54} color='#fff'/>
       <Sphere handleclick={handleclick}/>
     </Canvas>
    </> 
  )
}

export default App
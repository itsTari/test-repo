import React,{useState} from 'react'
// import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import Sphere from './components/Sphere'
import Light from './components/Light'
import GroundPlane from './components/GroundPlane'
import BackDrop from './components/BackDrop'
import FillLight from './components/FillLight'
import RimLight from './components/RimLight'

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
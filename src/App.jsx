import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import Scene from './components/FirstComp'

const App = () => {
  return (
    <>
      <Canvas>
      <ambientLight/>
      <pointLight position={[10, 10, 10]}/>

      <Box scale={[4,4,4]} position={[2, 2, 2]}>
        <meshStandardMaterial attach='material' color='hotpink'/>
        </Box>
      </Canvas>
    <Scene/>
    </>
    
  )
}

export default App
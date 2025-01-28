import React, {useState} from 'react'
import * as THREE from 'three'
import { useThree, Canvas } from '@react-three/fiber'


const Cube = (props) => {
    const {color, ...rest} = props
    const [cubeColor, setCubeColor] = useState(color)

    const handleClick =()=>{
      setCubeColor(Math.random() * 0xffffff)
    }

  return (
    <mesh {...rest} onClick={handleClick} scale={[5,5,5]}>
        <boxGeometry attach='geometry' args={[2, 2, 1]} />
        <meshBasicMaterial color={cubeColor} />
    </mesh>

    
  )
}

const Scene = ()=>{
  return(
    <Canvas>
      <Cube position={[-1, 0, 0]} color={Math.random() * 0xffffff }/>
      {/* <Cube position={[,2 , 2]} color={Math.random() * 0xffffff }/> */}
    </Canvas>
  )
}

export default Scene
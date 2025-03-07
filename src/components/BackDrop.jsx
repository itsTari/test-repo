import React from 'react'

const BackDrop = () => {
  return (
    <mesh receiveShadow  position={[-0, -1, -5]}>
        <planeGeometry attach='geometry' args={[500, 500]}/>
        <meshStandardMaterial attach='material' color='white'/>
    </mesh>
  )
}

export default BackDrop
import React from 'react'

const FillLight = ({brightness, color}) => {
  return (
    <rectAreaLight 
    width={3}
    height={3}
    intensity={brightness}
    color={color}
    position={[12, 1, 4]}
    lookAt={[0, 0, 0]}
    penumbra={2}
    castShadow
    />
  )
}

export default FillLight
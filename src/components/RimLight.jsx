import React from 'react'

const RimLight = ({brightness, color}) => {
  return (
    <rectAreaLight
    width={2}
    height={2}
    intensity={brightness}
    color={color}
    position={[1, 4, -2]}
    rotation={[10, 180, 0]}
    castShadow
    />
    

  )
}

export default RimLight
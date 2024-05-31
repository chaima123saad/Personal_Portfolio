
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Keyboard(props) {
  const { nodes, materials } = useGLTF('models/portal_keyboard.glb')
  return (
    <group {...props} dispose={null} position={[1.50,-0.099,0]} rotation-x={-Math.PI / 1.75} rotation-z={[-Math.PI / 0.78]}  >
      <mesh geometry={nodes.Object_2.geometry} material={materials.acmat_0}   scale={0.045}/>
    </group>
  )
}

useGLTF.preload('models/portal_keyboard.glb')

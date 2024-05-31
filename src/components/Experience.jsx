import React, { useRef } from 'react';
import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Desk } from "./Desk";
import { Keyboard } from "./Portal_keyboard";
import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three';

export const Experience = () => {
  // Create a reference for the cube
  const cubeRef = useRef();



  // Create a cube geometry and material
  const cubeGeometry = new BoxGeometry(0.7, 0.7, 0.7);
  const cubeMaterial = new MeshStandardMaterial({ color: 0x4682B4 });
  const cube = new Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true;
  cube.receiveShadow = true;

  return (
    <>
      <Environment preset="sunset" />
      <group>
        <Avatar />
        <Keyboard/>

        <Desk/>
        {/* Add the cube to the scene */}
        <primitive object={cube} position={[2.3, -0.7, 0]} rotation-z={-Math.PI / 2.2} rotation-x={-Math.PI / 19}  rotation-y={-Math.PI / 3} ref={cubeRef} />
      </group>
    </>
  );
};

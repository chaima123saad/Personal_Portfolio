
import {
  ContactShadows,
  Environment,
  OrbitControls
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";

export const Experience = () => {

  return (
    <>
      <Environment preset="sunset" />
      <group >
      
<Avatar />
           </group>
    </>
  );
};
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh" }}
      shadows
      camera={{ position: [0, 2, 5], fov: 30 }}
    >
      <color attach="background" args={["#ececec"]} />
      <Experience/>
    </Canvas>
  );
}

export default App;


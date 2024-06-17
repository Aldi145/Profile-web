"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import bunnyPath from "../../public/bunny.glb";

function Model(props) {
  const gltf = useLoader(GLTFLoader, bunnyPath);
  return <primitive object={gltf.scene} {...props} />;
}

const ThreeD = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows={false}
      camera={{ fov: 45 }}
      style={{
        position: "absolute",
        bottom: "0",
        right: "5rem",
        width: "300px",
        height: "500px",
        zIndex: "99999999",
      }}
    >
      {/* <color attach={"background"} args={["#101010"]} /> */}
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"sunset"} shadows={false}>
          <Model scale={0.1} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default ThreeD;

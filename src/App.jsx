import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import "./assets/css/app.css";
import Earth from "./components/earth/Earth";

export default function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  );
}

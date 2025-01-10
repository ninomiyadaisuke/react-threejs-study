import "./App.css";
import { Images } from "./components";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";

const images = [
  { url: "./img1.jpg", scale: [4, 3, 1], position: [-1, 0, 1] },
  { url: "./img2.jpg", scale: 3, position: [2, 0, 1] },
  { url: "./img3.jpg", scale: [1, 3.5, 1], position: [-2.3, 0, 2] },
  { url: "./img4.jpg", scale: [1.4, 2, 1], position: [-1.3, 0, 3.2] },
];

function App() {
  return (
    <Canvas>
      <ScrollControls pages={2} damping={2}>
        <Scroll>
          <Images images={images} />
        </Scroll>
        <Scroll html>
          <h1 style={{ position: "absolute", top: "60vh", left: "1.5em" }}>Be</h1>
          <h1 style={{ position: "absolute", top: "140vh", left: "40vw" }}>Creative</h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;

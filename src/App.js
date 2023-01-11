import "./App.css";
import { Images } from "./components";
import { Canvas } from "@react-three/fiber";

const images = [
  { url: "./img1.jpg", scale: [4, 3, 1], position: [-1, 0, 1] },
  { url: "./img2.jpg", scale: 3, position: [2, 0, 1] },
  { url: "./img3.jpg", scale: [1, 3.5, 1], position: [-2.3, 0, 2] },
  { url: "./img4.jpg", scale: [1.4, 2, 1], position: [-1.3, 0, 3.2] },
];

function App() {
  return (
    <Canvas>
      <Images images={images} />
    </Canvas>
  );
}

export default App;

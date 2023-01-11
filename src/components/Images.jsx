import React from 'react'
import { Image } from '@react-three/drei'

const Images = (props) => {
  const { images } = props
  return (
    <group>
      {images.map((image) => <Image key={image.url} url={image.url} scale={image.scale} position={image.position} />)}
    </group>
    // <group><Image url='./img1.jpg' scale={[4, 3, 3]} position={[-1, 0, 1]} /></group>
  )
}

export default Images
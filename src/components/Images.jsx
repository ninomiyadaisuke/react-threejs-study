import React, { useRef } from 'react'
import { Image, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

const Images = (props) => {
  const { images } = props
  const { width, height } = useThree((state) => state.viewport)
  const group = useRef()
  const data = useScroll()

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[3].material.zoom = 1 + data.range(0, 1 / 3) / 3
  })

  return (
    <group ref={group}>
      <Image url="./img1.jpg" scale={[4, height, 1]} position={[-1, 0, 1]} />
      <Image url="./img2.jpg" scale={3} position={[2, 0, 1]} />
      <Image
        url="./img3.jpg"
        scale={[1, 3.5, 1]}
        position={[-2.3, -height, 2]}
      />
      <Image
        url="./img4.jpg"
        scale={[1.4, 2, 1]}
        position={[1.3, -height - 0.3, 3.2]}
      />
    </group>
    // <group>
    //   {images.map((image) => <Image key={image.url} url={image.url} scale={image.scale} position={image.position} />)}
    // </group>
  )
}

export default Images
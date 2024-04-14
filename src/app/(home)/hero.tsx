"use client";

import { sectionRef } from "@/types/useTypes";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, Box, SoftShadows } from "@react-three/drei";
import { useEffect } from "react";

export default function Hero({ Ref }: { Ref: sectionRef }) {
  return (
    <section className="home-hero">
      <div className="home-hero-wrap">
        <div
          className="home-hero-con"
          ref={(e) => {
            Ref.current[0] = e;
          }}
        >
          <h2 className="home-hero-con__title">Hi, I am Maro</h2>
          <p className="home-hero-con__title"> I&apos;m web publisher</p>
          <p className="home-hero-con__sub">
            and I&apos;m aiming to be a front-end developer.
          </p>
        </div>
        <div className="home-hero-imgbox">
          <div className="home-hero-imgbox-canvas">
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 20 }}>
              {/* Lightmap */}
              <directionalLight
                intensity={10}
                color="#eee8df"
                position={[-5, 2, 3]}
              />
              <spotLight intensity={1} castShadow />
              {/* model */}
              <Model />
              {/* shadow */}
              <Shadows />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

function Model() {
  const { scene, animations } = useGLTF("/modeling/test.glb");
  const { ref, actions, names } = useAnimations(animations);
  useEffect(() => {
    actions[names[0]]?.reset().play();
  }, []);

  return (
    <primitive
      castShadow
      receiveShadow
      object={scene}
      ref={ref}
      scale={0.8}
      position={[0, -1, 0]}
      rotation={[0.1, -0.4, 0]}
    />
  );
}

function Shadows() {
  return (
    <>
      <Box
        position={[0.01, -0.38, -0.35]}
        args={[0.3, 1.5, 1.2]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <shadowMaterial transparent opacity={0} />
      </Box>
      <mesh
        rotation={[-0.5 * Math.PI, 0.02, 0]}
        position={[0, -1.2, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <shadowMaterial transparent color="#c18b3b" opacity={0.8} />
      </mesh>
      <SoftShadows size={100} samples={100} />
    </>
  );
}

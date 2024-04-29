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
          {/* 문구 수정 예정 */}
          <h2 className="home-hero-con__title fs-fr">
            안녕하세요
            <br />
            <b>MARO</b>입니다.
          </h2>
          <p className="home-hero-con__sub">
            저는 반응형 웹을 만들고 애니메이션 기술을 사용하는걸 좋아합니다.
            <br />
            또한 프론트엔드 개발자를 목표로 공부하고 있습니다.
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
      position={[0, -0.9, 0]}
      rotation={[0.1, -0.4, 0]}
    />
  );
}

function Shadows() {
  return (
    <>
      <Box
        position={[0.01, -0.5, -0.35]}
        args={[0.3, 1.5, 1.2]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <shadowMaterial transparent opacity={0} />
      </Box>
      <mesh
        rotation={[-0.5 * Math.PI, 0.02, 0]}
        position={[0, -1.15, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <shadowMaterial transparent color="#c18b3b" opacity={0.8} />
      </mesh>
      <SoftShadows size={100} samples={100} />
    </>
  );
}

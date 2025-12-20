"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Model() {
    const model = useGLTF("/laptop.glb");
    return <primitive object={model.scene} scale={1.5} />;
}

export default function ModelViewer() {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Canvas camera={{ position: [0, 1.5, 2], fov: 35 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                <Suspense fallback={null}>
                    <Model />
                </Suspense>

                <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    autoRotate={false}
                />
            </Canvas>
        </div>
    );
}
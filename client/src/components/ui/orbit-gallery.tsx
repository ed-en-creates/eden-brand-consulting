import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const FASHION_IMAGES = Array.from(
  { length: 25 },
  (_, i) => `/fashion/fashion-${String(i + 1).padStart(2, "0")}.jpg`
);

const PARTICLE_COUNT = 1200;
const PARTICLE_SIZE_MIN = 0.005;
const PARTICLE_SIZE_MAX = 0.012;
const SPHERE_RADIUS = 9;
const POSITION_RANDOMNESS = 4;
const ROTATION_SPEED_Y = 0.0005;
const IMAGE_COUNT = 25;
const IMAGE_SIZE = 1.5;

export function ParticleSphere() {
  const groupRef = useRef<THREE.Group>(null);

  const textures = useTexture(FASHION_IMAGES);

  useMemo(() => {
    textures.forEach(texture => {
      if (texture) {
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.flipY = false;
      }
    });
  }, [textures]);

  const particles = useMemo(() => {
    const result = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
      const r = SPHERE_RADIUS + (Math.random() - 0.5) * POSITION_RANDOMNESS;
      result.push({
        position: [
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.cos(phi),
          r * Math.sin(theta) * Math.sin(phi),
        ] as [number, number, number],
        scale:
          Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) +
          PARTICLE_SIZE_MIN,
        color: new THREE.Color().setHSL(
          Math.random() * 0.1 + 0.6,
          0.8,
          0.6 + Math.random() * 0.3
        ),
      });
    }
    return result;
  }, []);

  const orbitingImages = useMemo(() => {
    const images = [];
    for (let i = 0; i < IMAGE_COUNT; i++) {
      const angle = (i / IMAGE_COUNT) * Math.PI * 2;
      const x = SPHERE_RADIUS * Math.cos(angle);
      const z = SPHERE_RADIUS * Math.sin(angle);
      const position = new THREE.Vector3(x, 0, z);
      const outward = position.clone().normalize();
      const euler = new THREE.Euler();
      const matrix = new THREE.Matrix4();
      matrix.lookAt(
        position,
        position.clone().add(outward),
        new THREE.Vector3(0, 1, 0)
      );
      euler.setFromRotationMatrix(matrix);
      euler.z += Math.PI;
      images.push({
        position: [x, 0, z] as [number, number, number],
        rotation: [euler.x, euler.y, euler.z] as [number, number, number],
        textureIndex: i % textures.length,
      });
    }
    return images;
  }, [textures.length]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += ROTATION_SPEED_Y;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position} scale={p.scale}>
          <sphereGeometry args={[1, 8, 6]} />
          <meshBasicMaterial color={p.color} />
        </mesh>
      ))}
      {orbitingImages.map((img, i) => (
        <mesh key={`img-${i}`} position={img.position} rotation={img.rotation}>
          <planeGeometry args={[IMAGE_SIZE, IMAGE_SIZE]} />
          <meshBasicMaterial
            map={textures[img.textureIndex]}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

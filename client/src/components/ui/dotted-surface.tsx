import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const { theme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points[];
    animationId: number;
    count: number;
  } | null>(null);
  
  // Track mouse position for interaction
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const SEPARATION = 150;
    const AMOUNTX = 40;
    const AMOUNTY = 60;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(theme === 'dark' ? 0x000000 : 0xffffff, 2000, 10000);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000,
    );
    // Adjusted camera position to be closer and more cinematic
    camera.position.set(0, 250, 1000);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(scene.fog.color, 0);

    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particles: THREE.Points[] = [];
    const positions: number[] = [];
    const colors: number[] = [];

    // Create geometry for all particles
    const geometry = new THREE.BufferGeometry();

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0; // Will be animated
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

        positions.push(x, y, z);
        
        // Dynamic colors based on theme
        if (theme === 'dark') {
          colors.push(0.8, 0.8, 0.8); // Light grey in dark mode
        } else {
          colors.push(0.2, 0.2, 0.2); // Dark grey in light mode
        }
      }
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3),
    );
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // Create material
    const material = new THREE.PointsMaterial({
      size: 5, // Slightly smaller and sharper
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    // Create points object
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let count = 0;
    let animationId = 0;

    // Track mouse movements
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1
      mouseRef.current.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Animation function
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      // Interpolate mouse movement for smoothness
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const positionAttribute = geometry.attributes.position;
      const positions = positionAttribute.array as Float32Array;

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const index = i * 3;
          
          const xPos = positions[index];
          const zPos = positions[index + 2];
          
          // Calculate distance from mouse context (approximate)
          // Transform mouse to world space roughly for influence calculation
          const worldMouseX = mouseRef.current.x * 1000;
          const worldMouseZ = -mouseRef.current.y * 1000;
          
          const distToMouse = Math.sqrt(
            Math.pow(xPos - worldMouseX, 2) + Math.pow(zPos - worldMouseZ, 2)
          );
          
          // Interaction effect radius
          const interactRadius = 1000;
          let lift = 0;
          
          if (distToMouse < interactRadius) {
            // Dramatic uplift based on mouse proximity
            const intensity = Math.pow(1 - (distToMouse / interactRadius), 1.5);
            lift = Math.sin(intensity * Math.PI) * 250;
          }

          // Base Animation: Y position with sine waves, plus mouse lift
          positions[index + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50 + 
            lift;

          i++;
        }
      }

      positionAttribute.needsUpdate = true;

      // Slight camera movement based on mouse
      camera.position.x += (mouseRef.current.x * 200 - camera.position.x) * 0.05;
      camera.position.y += (-mouseRef.current.y * 100 + 250 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      count += 0.05; // Slower, more cinematic wave speed
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles: [points],
      animationId,
      count,
    };

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);

        // Clean up Three.js objects
        sceneRef.current.scene.traverse((object: THREE.Object3D) => {
          if (object instanceof THREE.Points) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach((mat: THREE.Material) => mat.dispose());
            } else {
              object.material.dispose();
            }
          }
        });

        sceneRef.current.renderer.dispose();

        if (containerRef.current && sceneRef.current.renderer.domElement) {
          containerRef.current.removeChild(
            sceneRef.current.renderer.domElement,
          );
        }
      }
    };
  }, [theme]);

  // Adjust background color to handle light and dark modes
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';

  return (
    <div
      ref={containerRef}
      className={cn('pointer-events-none absolute inset-0 -z-1', bgColor, className)}
      {...props}
    />
  );
}

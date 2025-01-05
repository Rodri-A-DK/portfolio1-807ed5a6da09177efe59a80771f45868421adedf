import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TweenMax, Power0, Elastic, Power2 } from 'gsap';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    const colors = [
      new THREE.Color(0xac1122),
      new THREE.Color(0x96789f),
      new THREE.Color(0x535353),
    ];

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);
    camera.position.set(0, 0, 350);

    const dotsAmount = 3000;
    const dotsGeometry = new THREE.Geometry();
    const positions = new Float32Array(dotsAmount * 3);
    const colorsAttribute = new Float32Array(dotsAmount * 3);
    const sizes = new Float32Array(dotsAmount);

    for (let i = 0; i < dotsAmount; i++) {
      const vector = new THREE.Vector3(
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400
      );
      dotsGeometry.vertices.push(vector);
      vector.toArray(positions, i * 3);

      const colorIndex = Math.floor(Math.random() * colors.length);
      colors[colorIndex].toArray(colorsAttribute, i * 3);

      sizes[i] = 5;
    }

    const dotMaterial = new THREE.PointsMaterial({
      size: 5,
      sizeAttenuation: true,
      vertexColors: true,
    });

    const dots = new THREE.Points(dotsGeometry, dotMaterial);
    scene.add(dots);

    const animate = () => {
      dots.rotation.x += 0.001;
      dots.rotation.y += 0.001;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
};

export default InteractiveBackground;

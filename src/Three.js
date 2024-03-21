import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import galaxyTexture from './wp7153972.png'; // Import the galaxy texture

const ThreeScene = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new THREE.SphereGeometry(5, 32, 32); // Create a sphere with a large radius
        const texture = new THREE.TextureLoader().load(galaxyTexture); // Load the galaxy texture
        const material = new THREE.MeshBasicMaterial({ map: texture }); // Use the texture as the material
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.z = 10;

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.001; // Rotate the sphere to create an animated effect
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            // Clean up Three.js resources
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default ThreeScene;

import React, { useEffect, useRef } from "react";
import {
  Scene,
  Color,
  Mesh,
  MeshNormalMaterial,
  BoxGeometry,
  PerspectiveCamera,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

let isHovered = false;

type Props = {
  className?: string;
  style?: React.CSSProperties;
  background?: string; // e.g. "#b6b2b2ff"
  showStats?: boolean;
};

export default function RotatingCube({
  className,
  style,
  background = "#191919",
  showStats = true,
}: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // --- Scene ---
    const scene = new Scene();
    scene.background = new Color(background);

    // --- Camera ---
    const getSize = () => {
      const rect = mount.getBoundingClientRect();
      return {
        width: Math.max(1, Math.floor(rect.width)),
        height: Math.max(1, Math.floor(rect.height)),
      };
    };

    const { width, height } = getSize();
    const camera = new PerspectiveCamera(50, width / height, 1, 1000);
    camera.position.z = 700;

    // --- Renderer ---
    const renderer = new WebGLRenderer({
      powerPreference: "high-performance",
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // Append canvas to our container (NOT document.body)
    mount.appendChild(renderer.domElement);

    // Mouse Stop Hover Event
    const canvas = renderer.domElement;

    const onEnter = () => (isHovered = true);
    const onLeave = () => (isHovered = false);

    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("mouseleave", onLeave);

    // --- Stats (optional) ---
    const stats = new Stats();
    if (showStats) {
      stats.dom.style.position = "absolute";
      stats.dom.style.top = "0";
      stats.dom.style.left = "0";
      // mount is not necessarily positioned; we’ll enforce relative below in JSX style
      mount.appendChild(stats.dom);
    }

    // --- Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // --- Cube ---
    const geometry = new BoxGeometry(200, 200, 200);
    const material = new MeshNormalMaterial();
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    // --- Animation loop ---
    let rafId = 0;

    const animate = () => {
      stats.begin();

      // rotate "forward" slowly (x-axis)
      cube.rotation.x += 0.01; // tweak speed
      cube.rotation.y += 0.001;

      if (!isHovered) {
        cube.rotation.x += 0.003;
        cube.rotation.y += 0.0008;
      }

      controls.update();
      renderer.render(scene, camera);

      stats.end();
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    // --- Resize handling (use ResizeObserver so it works inside layouts) ---
    const resize = () => {
      const { width: w, height: h } = getSize();
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();

      controls.dispose();

      // Dispose three resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();

      // mouse events
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mouseleave", onLeave);

      // Remove DOM nodes we added
      if (showStats && stats.dom.parentElement === mount)
        mount.removeChild(stats.dom);
      if (renderer.domElement.parentElement === mount)
        mount.removeChild(renderer.domElement);
    };
  }, [background, showStats]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: "relative", // so Stats can sit in the corner
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...style,
      }}
    />
  );
}

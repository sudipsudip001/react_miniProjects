import { useState, useEffect } from 'react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // This function will be called when the component is first rendered
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add the event listener when the component is mounted
    window.addEventListener('mousemove', handleMouseMove);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{position:'absolute', left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}>
      mouse
    </div>
  );
}
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Overlay from './components/Overlay';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Join from './pages/Join';
import './index.css';

function App() {
    const [entered, setEntered] = useState(false);
    const audioRef = useRef(null);

    const handleEnter = () => {
        console.log("User clicked enter");
        setEntered(true);

        if (audioRef.current) {
            audioRef.current.volume = 0.4;
            audioRef.current.play().catch(err => {
                console.warn("Audio autoplay blocked:", err);
            });
        }
    };

    // Particles Logic
    useEffect(() => {
        const canvas = document.getElementById('particles');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let particles = [];
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height + canvas.height;
                this.size = Math.random() * 4 + 1; // Bigger particles
                this.speedY = Math.random() * 3 + 1;
                this.color = `rgba(255, ${Math.floor(Math.random() * 100)}, 0, ${Math.random() * 0.6 + 0.2})`;
            }
            update() {
                this.y -= this.speedY;
                if (this.y < -10) this.reset();
            }
            draw() {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.size, this.size); // Square particles for Minecraft style
            }
        }

        for (let i = 0; i < 80; i++) particles.push(new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <Router>
            {!entered && <Overlay onEnter={handleEnter} />}

            <audio ref={audioRef} loop>
                <source src="/theme.mp3" type="audio/mpeg" />
            </audio>

            <canvas id="particles" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></canvas>

            <div id="app" style={{ opacity: entered ? 1 : 0, transition: 'opacity 1s' }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/regles" element={<Rules />} />
                    <Route path="/rejoindre" element={<Join />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import React, { useEffect, useState } from 'react';

function Home() {
    const [serverStatus, setServerStatus] = useState({ online: false, players: 0, loading: true });
    const serverIP = 'in-02.scarycloud.store:25568';

    useEffect(() => {
        fetch(`https://api.mcsrvstat.us/2/${serverIP}`)
            .then(res => res.json())
            .then(data => {
                setServerStatus({
                    online: data.online,
                    players: data.players ? data.players.online : 0,
                    loading: false
                });
            })
            .catch(() => setServerStatus({ online: false, players: 0, loading: false }));
    }, []);

    const copyIP = () => {
        navigator.clipboard.writeText(serverIP);
        alert('IP Copiée !');
    };

    return (
        <section className="hero">
            <div className="hero-bg" style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>
            <div className="overlay"></div>
            <div className="content">
                <h1 className="glitch" data-text="ANARCHIE">ANARCHIE</h1>
                <p className="subtitle">Le chaos est la seule règle.</p>
                <div className="cta-container">
                    <div className="server-status">
                        <span className={`status-dot ${serverStatus.loading ? '' : (serverStatus.online ? 'online' : 'offline')}`}></span>
                        <span className="status-text">
                            {serverStatus.loading ? 'RÉCUPÉRATION...' : (serverStatus.online ? `EN LIGNE - ${serverStatus.players} JOUEURS` : 'HORS LIGNE')}
                        </span>
                    </div>
                    <button onClick={copyIP} className="btn-primary">
                        <span className="btn-text">COPIER L'IP</span>
                        <span className="btn-glitch">IN-02.SCARYCLOUD.STORE:25568</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;

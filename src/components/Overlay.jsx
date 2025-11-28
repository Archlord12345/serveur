import React from 'react';

function Overlay({ onEnter }) {
    return (
        <div className="enter-overlay" onClick={onEnter}>
            <div className="enter-content">
                <h1>ANARCHIE</h1>
                <p>[ CLIQUER POUR ENTRER ]</p>
            </div>
        </div>
    );
}

export default Overlay;

import React from 'react';

function Rules() {
    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-center glitch mb-5" data-text="RÈGLES">RÈGLES</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card minecraft-book p-5">
                        <h2 className="text-center mb-4" style={{ color: '#000', textShadow: 'none' }}>LE LIVRE DE LA LOI</h2>
                        <div className="book-content" style={{ color: '#000', fontSize: '1.5rem' }}>
                            <p><strong>ARTICLE 1:</strong> IL N'Y A PAS DE RÈGLES.</p>
                            <hr style={{ borderColor: '#000' }} />
                            <p><strong>GRIEF:</strong> AUTORISÉ. Si vous pouvez le casser, c'est à vous.</p>
                            <p><strong>PVP:</strong> ACTIF PARTOUT. Ne faites confiance à personne.</p>
                            <p><strong>HACKS:</strong> TOLÉRÉS. Utilisez ce que vous voulez, mais ne faites pas planter le serveur.</p>
                            <p className="text-center mt-5"><em>"Le chaos est la seule véritable échelle."</em></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rules;

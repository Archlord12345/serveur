import React from 'react';

function Join() {
    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-center glitch mb-5" data-text="REJOINDRE">REJOINDRE</h1>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card h-100">
                        <div className="card-body text-center d-flex flex-column justify-content-center">
                            <h3>DISCORD</h3>
                            <p className="mb-4">Rejoignez la communauté, formez des alliances, déclarez des guerres.</p>
                            <a href="https://discord.gg/exemple" target="_blank" className="btn-discord btn-lg w-100">
                                ACCÉDER AU DISCORD
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100">
                        <div className="card-body text-center d-flex flex-column justify-content-center">
                            <h3>CONNEXION DIRECTE</h3>
                            <p>Version: 1.21.10</p>
                            <div className="bg-dark p-3 mb-3 border border-secondary">
                                <code className="text-white fs-4">in-02.scarycloud.store:25568</code>
                            </div>
                            <p className="text-muted">Aucune whitelist. Aucune pitié.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;

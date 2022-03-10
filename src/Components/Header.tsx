import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
    return (
        <header id="header">
            <div className="header-img">
                <div className="container">
                    <div className="page-headings">
                        <h1>we serve fresh vegetables & fruits</h1>
                        <h2>we deliver organic vegetables & fruits</h2>
                        <HashLink to="#shop" style={{ textDecoration: 'none' }}>
                            <div className="btn btn-primary">Go to shop</div>
                        </HashLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

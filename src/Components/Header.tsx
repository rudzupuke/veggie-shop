import React from 'react';
import Button from './Button';

export default function Header() {
    return (
        <header id="header">
            <div className="header-img">
                <div className="container">
                    <div className="page-headings">
                        <h1>we serve fresh vegetables & fruits</h1>
                        <h2>we deliver organic vegetables & fruits</h2>
                        <Button text="Go To Shop" type="primary" url="#shop" />
                    </div>
                </div>
            </div>
        </header>
    );
}

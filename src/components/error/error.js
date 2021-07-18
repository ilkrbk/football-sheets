import React from 'react';
import "./main.sass";

export const ErrorBoundary = () => (        
    <section className="error">
        <h1 className="error__info">Oops!</h1>
        <h3 className="error__title">Data Error</h3>
        <p className="error__descr">Check season and tournament</p>
        <a href='/' className="error__btn">Go to Homepage</a>
    </section>
)
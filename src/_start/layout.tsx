import * as React from 'react';

export function Layout({ children }) {
    return (
        <div className="main-wrapper layout-grid">
            <main role="main">
                {children}
            </main>
        </div>
    );
}

import { useState } from 'react';

const Header = () => {
  return (
    <header className="h-16 bg-background flex items-center justify-between px-6">
      <div className="relative w-96">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full bg-background-card text-text-primary placeholder-text-muted text-sm rounded-lg pl-10 pr-4 py-2 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative text-text-secondary hover:text-text-primary transition-colors duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background-card text-text-primary">
            J
          </div>
          <span className="text-sm font-medium text-text-primary">José Augusto</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 
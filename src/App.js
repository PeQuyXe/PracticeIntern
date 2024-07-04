import React from 'react';
import Search from '@components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full max-w-md mb-4">
        <h1 className="text-3xl font-bold text-center text-blue-600">Weather App</h1>
      </header>
      <main className="w-full max-w-8xl">
        <Search />
      </main>
    </div>
  );
}

export default App;

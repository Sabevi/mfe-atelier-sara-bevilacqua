import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header/Header'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <main>
        <h2>Welcome to the Application</h2>
      </main>
    </div>
  );
};

export default App;

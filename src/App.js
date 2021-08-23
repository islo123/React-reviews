import React from 'react';
import Review from './Review';

function App() {
  
  return (
    <main>

    
      <div className="container">
        <div className="title">
          <div >Reviews</div>
          <div className="underline"></div>
        </div>
        
        <div>
          <Review/>
        </div>
      </div>
      </main>
    );
}

export default App;

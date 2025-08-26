import React from 'react';

function Home() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 50%, #80deea 100%)',
      padding: '40px', 
      minHeight: '400px',
      color: 'black'
    }}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page of our React application!</p>
      <div style={{ marginTop: '30px' }}>
        <h2>Featured Content</h2>
        <p>This is a larger home page with more content to demonstrate the routing functionality.</p>
        <p>React Router DOM allows us to create single-page applications with multiple views.</p>
        <p>Each route corresponds to a different component, providing a seamless user experience.</p>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3>Benefits of Client-Side Routing</h3>
        <ul>
          <li>Faster page transitions</li>
          <li>Better user experience</li>
          <li>No full page reloads</li>
          <li>Maintains application state</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

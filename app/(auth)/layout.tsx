import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const gradientStyles = {
    background: 'linear-gradient(to right, #3498db, #da1b60)',
    minHeight: '100vh', // Ensures the gradient covers the entire viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // Adjust text color for better visibility
  };

  return (
    <div style={gradientStyles} >
      {children}
    </div>
  );
}

export default Layout;

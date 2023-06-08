import React, { useState } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const isAuthenticated = performAuthentication(); 
    
    if (isAuthenticated) {
      setIsLoggedIn(true);
      console.log('Usuário autenticado com sucesso!');
    } else {
      console.log('Falha na autenticação. Verifique suas credenciais.');
    }
  };
  
  const handleLogout = () => {
    performLogout(); 
  
    setIsLoggedIn(false);
    console.log('Usuário deslogado com sucesso!');
  };

  return (
    <div className="form-header">
      <div className="title">
        <h1>Popcorn Movies</h1>
      </div>
      <div className="login-button">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Sair</button>
        ) : (
          <button onClick={handleLogin}>Entrar</button>
        )}
      </div>
    </div>
  );
}

export default Header;

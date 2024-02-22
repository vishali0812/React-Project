import React from 'react';
import NavBar from './index page/nav';
import { useNavigate } from 'react-router-dom';
import IndexPage from './index page/indexPage';
const App = () => {
  const navigate = useNavigate();
  const handleLogin = (type) => {
    if(type==="Service Provider")
    navigate('/provider');
  else if(type==="Service Seeker")
  navigate('/seeker');
 else if(type==="Admin")
   navigate('/admin');
  };

  return (
    <div>
      <NavBar onLogin={handleLogin} />
      <IndexPage />
    </div>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import App from './App';
import ProfileService from './ServiceSphere/profileForm.jsx';
import ProfileSeeker from './Client/profileForm.jsx'
import SeekerDash from './Client/dashBoard.jsx';
import ProviderDash from './ServiceSphere/dasBoard.jsx';
import AdminDash from './Admin/dashAdmin.jsx';
import UsersAdmin from './Admin/UsersAdmin.jsx';
import ProviderAdmin from './Admin/providerInfo.jsx';
import ClientAdmin from './Admin/clientInfo.jsx';
import PostRequestClient from './Client/postRequestClient.jsx';
import FetchProviderClient from './Client/fetchProviderClient.jsx';
import ViewProfileClient from './Client/viewProfile.jsx';
import ReviewService from './ServiceSphere/reviewService.jsx';
import OurServices from './index page/ourServices.jsx';
import OurTeam from './index page/ourTeam.jsx';
import ReachUs from './index page/reachUs.jsx';
import NavBar from './index page/nav.jsx';
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
    <Routes>
  <Route path="/" element={<App />} />
  {/* ==============Admin Routes==================== */}
  <Route path="/admin" element={<AdminDash />} />
  <Route path="/seekerAdmin" element={<ClientAdmin />} />
  <Route path="/providerAdmin" element={<ProviderAdmin />} />
  <Route path="/userAdmin" element={<UsersAdmin />} />
  {/* ==============Provider Routes==================== */}
  <Route path="/provider" element={<ProviderDash />} />
  <Route path="/profileService" element={<ProfileService />} />
  <Route path="/reviewService" element={<ReviewService />} />
  {/* ==============Client Routes==================== */}
  <Route path="/seeker" element={<SeekerDash />} />
  <Route path="/profileSeeker" element={<ProfileSeeker />} />
  <Route path="/postRequestSeeker" element={<PostRequestClient />} />
  <Route path="/fetchProviderSeeker" element={<FetchProviderClient />} />
  <Route path="/viewProfileSeeker/:em" element={<ViewProfileClient />} />
  {/* ===========Index Page=============================== */}
  <Route path="/ourServices" element={<>
  <NavBar /> <br /><br /><OurServices /></>} />
  <Route path="/ourTeam" element={<>
  <NavBar /> <br /><br />
  <OurTeam />
</>} />
  <Route path="/reachUs" element={<>
  <NavBar /> <br /><br /><ReachUs /></>} />

</Routes>

    </Router>
  </React.StrictMode>,
  rootElement
);

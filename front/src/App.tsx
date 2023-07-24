import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import axios from 'axios';
import LoginPage from './pages/LoginPage';
import ReigsterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import PortfolioFormPage from './pages/PortfolioFormPage';
import ResumeFormPage from './pages/ResumeFormPage';
import UserPage from './pages/UserPage';
import PortfolioPage from './pages/PortfolioPage';
import {RecoilRoot} from "recoil"

const LOCAL_BACKEND="http://localhost:4000"
const DEPLOY_BACKEND="https://build-your-portfolio-0ccbe2f7f061.herokuapp.com"

axios.defaults.baseURL = DEPLOY_BACKEND
axios.defaults.withCredentials = true;

function App() {
  return (
    <RecoilRoot>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<IndexPage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/login/google" element={<LoginPage/>} />
              <Route path="/login/github" element={<LoginPage/>} />
              <Route path="/register" element={<ReigsterPage/>} />
              <Route path={'/resume/create'} element={<ResumeFormPage/>}/>
              <Route path={'/resume/update/:id'} element={<ResumeFormPage/>}/>
              <Route path={'/portfolio/create'} element={<PortfolioFormPage/>}/>
              <Route path={'/portfolio/update/:id'} element={<PortfolioFormPage/>}/>
              <Route path={'/user/:id'} element={<UserPage/>}/>
              <Route path={'/portfolio/:id'} element={<PortfolioPage/>}/>
              <Route path="/account" element={<ProfilePage />} />
            </Route>
          </Routes>
    </RecoilRoot>
  )
}

export default App

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
import BookhabitPage from './pages/bookhabitPage';
import BookhabitPortfolio from './pages/BookhabitPortfolio';
import BookhabitPortfolioFunction from './pages/BookhabitPortfolioFunction';

const LOCAL_BACKEND="http://localhost:4000"
const DEPLOY_BACKEND="https://my-portfolio-server.com"
const TEST_BACKEND = "http://15.165.98.25"

axios.defaults.baseURL = LOCAL_BACKEND
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
              {/* 백엔드 서버 내리고 포트폴리오만 보여주는 용도의 페이지 */}
              <Route path={'/bookhabit'} element={<BookhabitPage/>}/>
              <Route path={'/bookhabit/portfolio/:id'} element={<BookhabitPortfolio/>}/>
              <Route path={'/bookhabit/portfolio/function/:id'} element={<BookhabitPortfolioFunction/>}/>
            </Route>
          </Routes>
    </RecoilRoot>
  )
}

export default App

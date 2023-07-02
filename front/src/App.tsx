import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import axios from 'axios';
import LoginPage from './pages/LoginPage';
import ReigsterPage from './pages/RegisterPage';
import { UserContextProvider } from './Context/UserContext';
import PostDetail from './pages/PostDetail';
import ProfilePage from './pages/ProfilePage';
import UserPostsPage from './pages/UserPostsPage';
import 'animate.css'
import { ValidateContextProvider } from './Context/ValidateContext';
import PortfolioFormPage from './pages/PortfolioFormPage';
import ResumeFormPage from './pages/ResumeFormPage';
import UserPage from './pages/UserPage';
import PortfolioPage from './pages/PortfolioPage';

axios.defaults.baseURL = "http://localhost:4000"
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <ValidateContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<IndexPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<ReigsterPage/>} />
            <Route path={'/resume/create'} element={<ResumeFormPage/>}/>
            <Route path={'/resume/update/:id'} element={<ResumeFormPage/>}/>
            <Route path={'/portfolio/create'} element={<PortfolioFormPage/>}/>
            <Route path={'/portfolio/update/:id'} element={<PortfolioFormPage/>}/>
            <Route path={'/portfolio/:id'} element={<PortfolioPage/>}/>
            <Route path={'/post/:id'} element={<PostDetail/>}/>
            <Route path={'/user/:id'} element={<UserPage/>}/>
            <Route path="/account" element={<ProfilePage />} />
            <Route path="/account/posts" element={<UserPostsPage />} />
          </Route>
        </Routes>
      </ValidateContextProvider>
    </UserContextProvider>
  )
}

export default App

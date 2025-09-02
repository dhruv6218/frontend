import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Meetings from './pages/Meetings'
import MeetingDetail from './pages/MeetingDetail'
import Upload from './pages/Upload'
import Team from './pages/Team'
import Compliance from './pages/Compliance'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Help from './pages/Help'
import Pricing from './pages/Pricing'
import FAQ from './pages/FAQ'
import Resources from './pages/Resources'
import Blog from './pages/Blog'
import Admin from './pages/Admin'
import Features from './pages/Features'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'meetings', element: <Meetings /> },
      { path: 'meetings/:id', element: <MeetingDetail /> },
      { path: 'upload', element: <Upload /> },
      { path: 'team', element: <Team /> },
      { path: 'compliance', element: <Compliance /> },
      { path: 'reports', element: <Reports /> },
      { path: 'settings', element: <Settings /> },
      { path: 'help', element: <Help /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'resources', element: <Resources /> },
      { path: 'blog', element: <Blog /> },
      { path: 'features', element: <Features /> },
      { path: 'admin', element: <Admin /> },
    ],
  },
], { basename: import.meta.env.BASE_URL })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

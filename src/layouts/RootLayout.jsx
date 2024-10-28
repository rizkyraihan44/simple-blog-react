import { NavLink, Outlet } from "react-router-dom"
import '../styles/index.css'
const RootLayout = () => {
  return (
    <>
      <NavLink to='/' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>Home</NavLink>
      <NavLink to='/about' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>About</NavLink>
      <NavLink to='/blogs' className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>Blog</NavLink>
      <p />
      <Outlet />
    </>
  )
}

export default RootLayout
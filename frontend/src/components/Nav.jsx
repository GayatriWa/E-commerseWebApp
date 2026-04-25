import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  const user = useSelector((state)=>state.userReducer.user)

  return (
    <nav className='flex justify-center items-center gap-x-5 p-10 mb-10'>
        <NavLink to='/'>Home</NavLink>
        {/* <NavLink to='/products'>Products</NavLink> */}

        {user ? <>
          {user && user?.isAdmin && <NavLink to='/admin/create-product'>Create Product</NavLink> }
            
            <NavLink to='/admin/user-profile'>settings</NavLink>
          </>:<><NavLink to='/login'>Login</NavLink></>}
        
    </nav>

  )
}

export default Nav
import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { HiBars3BottomLeft,HiOutlineArrowRightOnRectangle,HiOutlineChatBubbleLeftRight, HiOutlineUserGroup } from "react-icons/hi2";
import useAdmin from '../../hooks/useAdmin';
import logo from "../../assets/logo/EnaEma.png"
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
const Dashboard = () => {
  const navigate = useNavigate()
  const [isAdmin] = useAdmin();
  const {logOut} = useAuth();

  const handleOut = ()=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to access dashboard",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {

        logOut()
.then(()=>{
  navigate("/")
  Swal.fire(
    'Log Out!',
    'Logout successful',
    'success'
  )
})


      }
    })
  }

  const notAdmin = ()=>{
    if(!isAdmin){
      logOut()
      .then(()=>{
        Swal.fire({
          title: 'Error!',
          text: 'Access Denied',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
    }
  }

    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
   <Outlet />
   <label htmlFor="my-drawer-2" className="drawer-button lg:hidden absolute left-2 top-2"><HiBars3BottomLeft className='w-10 h-10 text-primary' /></label>
  
  </div> 
  <div className="drawer-side h-full">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu py-4 pl-4 pr-0 w-64 h-full bg-base-200 text-base-content">
    <Link to="/" className='flex flex-col items-center gap-2 my-10'>
    <img src={logo} alt="Ena Ema Technologies" className='w-10' />
    <p className='brandFont font-extrabold text-lg text-secondary'>Admin Panel</p>
  </Link>
      {
        isAdmin ? <>
        
        <NavLink to="/dashboard/manageUsers" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><HiOutlineUserGroup className='inline-flex items-center h-6 w-6'/> Manage Users</NavLink>

        <NavLink to="/dashboard/manageClients" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><HiOutlineChatBubbleLeftRight className='inline-flex items-center h-6 w-6'/> Manage Clients Message</NavLink>

        <div className="divider"></div>

        <button onClick={handleOut}>

<HiOutlineArrowRightOnRectangle className='h-7 w-7 text-primary'/>

        </button>

        </>
        : <button onClick={handleOut}>

        <HiOutlineArrowRightOnRectangle className='h-7 w-7 text-primary'/>
        
                </button>
      }
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
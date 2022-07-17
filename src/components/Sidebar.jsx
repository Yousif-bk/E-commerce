import React from 'react'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../assets/dummy';
import { useStateContext } from "../contexts/ContextProvider";

function Sidebar() {
  const {  currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebae = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className="flex justify-between items-center">
          <Link to='/' className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            onClick={handleCloseSidebae}>
            <SiShopware /><span>Shopy</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button onClick={() => setActiveMenu(!activeMenu)} type='button' 
            style={{ color: currentColor }}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                {item.title}
              </p>
              {item.links.map((links) => (
                <NavLink
                  to={`/${links.name}`}
                  key={links.name}
                  onClick={handleCloseSidebae}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '',
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink}>
                  {links.icon}
                  <span className='capitalize'>
                    {links.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar
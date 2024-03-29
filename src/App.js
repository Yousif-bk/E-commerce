import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FiSettings } from "react-icons/fi";
import { Navbar, Sidebar, ThemeSettings } from "./shared/components";
import {
  Ecommerce,
  Customers,
  Employees,
  Orders,
  AddOrder,
  Login,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
import { ProtectedRoute } from "./shared/components";
import { UserAuthContextProvider } from "./contexts/AuthContext";
function App() {
  const {
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>

          <div>
            {themeSettings && <ThemeSettings />}
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />}></Route>
              <Route path="/ecommerce" element={<Ecommerce />}></Route>
              {/* Pages */}
              <Route
                path="/orders"
                element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                }></Route>
              <Route path="/employees" element={<Employees />}></Route>
              <Route path="/customers" element={<Customers />}></Route>
              <Route path="/addOrder" element={<AddOrder />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

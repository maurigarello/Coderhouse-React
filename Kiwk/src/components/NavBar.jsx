import CartWidget from './CartWidget';
import login from "../assets/login.png";
import register from "../assets/register.png";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
      <div>
        <div
          className="flex flex-col items-center justify-center mt-32">
          <div className="flex flex-col">
            
            <nav
              className="flex justify-around py-4 bg-white/80
                    backdrop-blur-md shadow-md w-full
                    fixed top-0 left-0 right-0 z-10 ">
              <div className="flex items-center">
                <a className="cursor-pointer">
                  <h3 className="text-2xl font-medium text-blue-500">
                    <img
                      className="hidden h-6 md:flex lg:flex md:h-8 lg:h-10 object-cover"
                      href=""
                      alt="LOGO"
                      src={logo}/>
                  </h3>
                </a>
              </div>

              <div className="flex items-center">
                <a className="cursor-pointer">
                  <h3 className="text-2xl font-medium text-blue-500">
                    <img
                      className="h-8 md:hidden lg:hidden object-cover"
                      href=""
                      alt="LOGO"
                      src=""/>
                  </h3>
                </a>
              </div>

              <div className="items-center hidden space-x-8 lg:flex">
                <a
                  className="flex text-xl text-gray-600 hover:text-blue-500
                            cursor-pointer transition-colors duration-300">
                  Inicio
                </a>

                <a
                  className="flex text-xl text-gray-600 hover:text-blue-500
                  cursor-pointer transition-colors duration-300">
                  Categorías
                </a>
              </div>

              <div className="flex items-center space-x-5">
                <a
                  className="flex text-xl text-gray-600 hover:text-blue-500
                            cursor-pointer transition-colors duration-300">
                  <img 
                  className="fill-current h-7 w-7 mr-2 mt-0.5"
                  href=""
                  alt=""
                  src={register}/>
                  Registrarse
                </a>

                <a
                  className="flex text-xl text-gray-600 hover:text-blue-500
                  cursor-pointer transition-colors duration-300">
                  <img 
                  className="fill-current h-7 w-7 mr-2 mt-0.5"
                  href=""
                  alt=""
                  src={login}/>
                  Ingresar
                </a>

                <CartWidget />

              </div>
            </nav>
          </div>
        </div>
      </div>
    )};
  


export default Navbar;

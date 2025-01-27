import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check authentication status on mount and when localStorage changes
    const checkAuth = () => {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        const user = JSON.parse(currentUser);
        setIsLoggedIn(user.isAuthenticated);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 
            onClick={() => navigate("/")} 
            className="text-2xl font-bold text-primary cursor-pointer hover:opacity-90 transition-opacity"
          >
            MarketIntel
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="text-gray-600 hover:text-primary hover:bg-transparent transition-colors duration-200"
          >
            Dashboard
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/portfolio")}
            className="text-gray-600 hover:text-primary hover:bg-transparent transition-colors duration-200"
          >
            Portfolio
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/news")}
            className="text-gray-600 hover:text-primary hover:bg-transparent transition-colors duration-200"
          >
            News
          </Button>
        </nav>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="text-gray-600 hover:text-primary hover:bg-transparent transition-colors duration-200"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                onClick={() => navigate("/auth/login")}
                className="text-gray-600 hover:text-primary hover:bg-transparent transition-colors duration-200"
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/auth/signup")}
                className="bg-primary text-white hover:bg-primary/90 transition-colors duration-200 px-6"
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
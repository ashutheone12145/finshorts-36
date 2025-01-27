import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 
            onClick={() => navigate("/")} 
            className="text-2xl font-bold text-primary cursor-pointer hover:opacity-90 transition-opacity"
          >
            MarketIntel
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="text-muted-foreground hover:text-primary hover:bg-gray-100 transition-colors duration-200"
          >
            Dashboard
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/portfolio")}
            className="text-muted-foreground hover:text-primary hover:bg-gray-100 transition-colors duration-200"
          >
            Portfolio
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/news")}
            className="text-muted-foreground hover:text-primary hover:bg-gray-100 transition-colors duration-200"
          >
            News
          </Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => navigate("/auth/login")}
            className="hover:bg-gray-100 transition-colors duration-200"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/auth/signup")}
            className="bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};
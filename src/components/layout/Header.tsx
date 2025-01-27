import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">MarketIntel</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="text-muted-foreground hover:text-primary"
          >
            Dashboard
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/portfolio")}
            className="text-muted-foreground hover:text-primary"
          >
            Portfolio
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/news")}
            className="text-muted-foreground hover:text-primary"
          >
            News
          </Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/auth/signup")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};
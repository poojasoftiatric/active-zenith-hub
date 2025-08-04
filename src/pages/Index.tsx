import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/5 to-primary/5">
      <div className="text-center space-y-8 max-w-md">
        <div className="flex items-center justify-center gap-3">
          <div className="p-4 rounded-full gradient-primary">
            <Dumbbell className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-primary">So</span>
            <span className="text-foreground">Activ</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive Gym Management System
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={() => navigate("/auth/login")} 
            className="w-full h-12 text-lg"
          >
            Access Admin Portal
          </Button>
          <Button 
            onClick={() => navigate("/auth/register")} 
            variant="outline" 
            className="w-full h-12"
          >
            Create Admin Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

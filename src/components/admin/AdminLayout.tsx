import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import ClientRegistrationModal from "./modals/ClientRegistrationModal";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      
      <div className="lg:ml-64 transition-all duration-300">
        <AdminHeader onAddClient={() => setIsClientModalOpen(true)} />
        
        <main className="p-6">
          {children}
        </main>
      </div>

      <ClientRegistrationModal 
        isOpen={isClientModalOpen}
        onClose={() => setIsClientModalOpen(false)}
      />
    </div>
  );
};

export default AdminLayout;
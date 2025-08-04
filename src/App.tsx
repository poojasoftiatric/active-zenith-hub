import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import ForgotPasswordPage from "./components/auth/ForgotPasswordPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import EnquiriesPage from "./pages/admin/EnquiriesPage";
import EnquiryFormPage from "./pages/admin/EnquiryFormPage";
import ClientsPage from "./pages/admin/ClientsPage";
import StaffPage from "./pages/admin/StaffPage";
import ReportsPage from "./pages/admin/ReportsPage";
import SetupPage from "./pages/admin/SetupPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Authentication Routes */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/enquiries" element={<EnquiriesPage />} />
          <Route path="/admin/enquiry-form" element={<EnquiryFormPage />} />
          <Route path="/admin/clients" element={<ClientsPage />} />
          <Route path="/admin/staff" element={<StaffPage />} />
          <Route path="/admin/reports" element={<ReportsPage />} />
          <Route path="/admin/setup" element={<SetupPage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

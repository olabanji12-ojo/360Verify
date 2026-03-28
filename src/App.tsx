import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./components/auth/AuthPage";
import Register_Form from "./components/auth/authsub/Register_Form";
import LoginForm from "./components/auth/authsub/LoginForm";
import ForgotPassword from "./components/auth/authsub/ForgotPassword";
import ResetPassword from "./components/auth/authsub/ResetPassword";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./components/dashboard/subcomponents/DashboardHome";
import NewVerification from "./components/dashboard/newverification/NewVerification";
import PreviewRequest from "./components/dashboard/newverification/PreviewRequest";
import VerifyAddress from "./components/dashboard/newverification/VerifyAddress";
import VerifyGuarantor from "./components/dashboard/newverification/VerifyGuarantor";

import ChooseAddress from "./components/shared/ChooseAddress";
import MultipleCandidate from "./components/shared/MultipleCandidate";
import Request from "./components/dashboard/subcomponents/Request";
import RequestBatchView from "./components/dashboard/subcomponents/request_batch_view";
import Reports from "./components/dashboard/subcomponents/Reports";
import Transactions from "./components/dashboard/subcomponents/Transactions";

const App = () => {
  return (
    <BrowserRouter>
      {/* Removed the global bg color and 1440px constraint so Dashboard can go full width! */}
      <div className="h-screen w-full overflow-hidden flex flex-col">
          
          {/* 🚦 The Traffic Cop! */}
          <Routes>
            {/* The Layout Route */}
            <Route path="/auth" element={<AuthPage />}>
              {/* Child Routes that appear INSIDE AuthPage */}
              <Route path="register" element={<Register_Form />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />


              {/* Default redirect inside /auth */}
              <Route index element={<Navigate to="login" replace />} />
            </Route>

            {/* Dashboard Routes - Nested! */}
            <Route path="/dashboard" element={<DashboardLayout />}>
                {/* The "index" route shows up by default when you land on /dashboard */}
                <Route index element={<DashboardHome />} />
                <Route path="new-verification" element={<NewVerification />} />
                <Route path="preview-request" element={<PreviewRequest />} />
                <Route path="requests" element={<Request />} />
                <Route path="requests/:id" element={<RequestBatchView />} />
                <Route path="reports" element={<Reports />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="settings" element={<Request />} /> {/* Placeholder */}
                <Route path="verify-address" element={<VerifyAddress />} />
                <Route path="identity" element={<VerifyGuarantor />} /> {/* Placeholder */}
                <Route path="guarantor" element={<VerifyGuarantor />} />
                <Route path="choose-address" element={<ChooseAddress />} />
                <Route path="multiple-candidate" element={<MultipleCandidate />} />
            </Route>

            {/* Global Fallback -> Redirect all bad URLs straight to Login */}
            <Route path="*" element={<Navigate to="/auth/login" replace />} />

          </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

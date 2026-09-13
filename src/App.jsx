import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import PartnersPage from "./pages/PartnersPage";
import ServicesPage from "./pages/ServicesPage";
import Index from "./pages/Index";
import LegalNoticePage from "./pages/LegalNoticePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/partenaires" element={<PartnersPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/carrieres" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<LegalNoticePage />} />
          <Route
            path="/politique-de-confidentialite"
            element={<PrivacyPolicyPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import ActualitesPage from "./pages/ActualitesPage";
import ActualiteDetailPage from "./pages/ActualiteDetailPage";
import ContactPage from "./pages/ContactPage";
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
          <Route path="/actualites" element={<ActualitesPage />} />
          <Route path="/actualites/:slug" element={<ActualiteDetailPage />} />
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

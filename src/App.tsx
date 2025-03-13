import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "@/pages/HomePage";
import ArticlePage from "@/pages/ArticlePage";
import CategoryPage from "@/pages/CategoryPage";
import SearchPage from "@/pages/SearchPage";
import Dashboard from "./components/Dashboard";
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdDemonstration from "./pages/AdDemonstration";
// import ScriptLoader from "./components/ScriptLoader";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* NetPub GDPR Compliance Script */}
      {/* <ScriptLoader
        src="https://fstatic.netpub.media/extra/cmp/cmp-gdpr.js"
        defer
      /> */}
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <AnimatePresence mode="wait">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/article/:id" element={<ArticlePage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/ad-demonstration" element={<AdDemonstration />} />
              </Routes>
            </main>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

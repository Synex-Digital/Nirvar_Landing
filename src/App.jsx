import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageSkeleton } from "./components/layout/Loaders";

const Home = lazy(() => import("./pages/Home"));
const About_Us = lazy(() => import("./pages/About-Us"));
const Service = lazy(() => import("./pages/service"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About_Us />} />
          <Route path="/service" element={<Service />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";

const PagesRouting: FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default PagesRouting;

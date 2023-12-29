import FramePage from "pages/Frame";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
         
        <Routes>
        <Route path="/frame" element={<FramePage />} />
          <Route path="/" element={<Home />} /> 
           <Route path="*" element={<NotFound />} />
          
        </Routes>
      </Router>
     </React.Suspense>
  );
};
export default ProjectRoutes;

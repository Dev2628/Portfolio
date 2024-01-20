import { Routes, Route as ReactRoute } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { Home } from "../routes/Home";
import { About } from "../routes/About";
import { Projects } from "../routes/Projects";
import { Contact } from "../routes/Contact";

export const Route = () => {
  return (
    <Routes>
      <ReactRoute path="/" element={<AppLayout />}>
        <ReactRoute index element={<Home />} />
        <ReactRoute path="about" element={<About />} />
        <ReactRoute path="projects" element={<Projects />} />
        <ReactRoute path="contact" element={<Contact />} />
      </ReactRoute>
    </Routes>
  );
};

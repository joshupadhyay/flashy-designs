import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/home/HomePage";
import { MainPage } from "./components/mainpage";
import { About } from "./components/About";
import { BlogList } from "./components/blog/BlogList";
import { BlogPost } from "./components/blog/BlogPost";
import RotatingCube from "./components/acsii";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/oldlandingpage" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<RotatingCube style={{ height: 500 }} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

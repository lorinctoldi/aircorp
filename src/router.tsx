import { Routes, Route } from 'react-router-dom';
import { Home, Defense, Technology } from 'pages';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/defense" element={<Defense />} />
    </Routes>
  );
}

export default AppRouter;

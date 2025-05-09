import { Routes, Route } from 'react-router-dom';
import { Home, Defense, Technology, Terms } from 'pages';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/defense" element={<Defense />} />
      <Route path="/terms-of-use" element={<Terms />} />
    </Routes>
  );
}

export default AppRouter;

import { Routes, Route } from 'react-router-dom';
import { Home, Defense } from 'pages';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/defense" element={<Defense />} />
    </Routes>
  );
}

export default AppRouter;

import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/*
      <Route path="/technology" element={<Technology />} /> */}
    </Routes>
  );
}

export default AppRouter;

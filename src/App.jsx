import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { OptionAPage } from './pages/OptionAPage';
import { OptionBPage } from './pages/OptionBPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/option-a" element={<OptionAPage />} />
      <Route path="/option-b" element={<OptionBPage />} />
    </Routes>
  );
}

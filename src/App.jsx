import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SystemDesignQuestions from './pages/SystemDesignQuestions';
import ThankYou from './pages/ThankYou';
import Download from './pages/Download';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/300-system-design-interview-questions" element={<SystemDesignQuestions />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/300-system-design-interview-questions/download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

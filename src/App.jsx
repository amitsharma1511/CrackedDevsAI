import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Home from './components/Home';
import Job from './components/Job';
import InterviewQuestions from './components/InterviewQuestions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='home' />} />
          <Route path='home' element={<Home />} />
          <Route path='job/:jobId' element={<Job />} />
          <Route path='interview' element={<InterviewQuestions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

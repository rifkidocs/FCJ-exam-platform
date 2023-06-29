import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css';
import LandingPage from './pages/LandingPage';

// Import components
import QuestionManager from './pages/QuestionManager';
import SingleQuestionPage from "./pages/SingleQuestionPage";
import TestManager from './pages/TestManager';
import SingleTestPage from './pages/SingleTestPage';
import ExamManager from './pages/ExamManager';
import SingleExamPage from './pages/SingleExamPage';
import TakeExamPage from './pages/TakeExamPage';
import ReviewSessionPage from "./pages/ReviewSessionPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/questions" element={<QuestionManager />} />
                <Route path="/question/:id" element={<SingleQuestionPage />} />
                <Route path="/tests" element={<TestManager />} />
                <Route path="/test/:id" element={<SingleTestPage />} />
                <Route path="/exams" element={<ExamManager />} />
                <Route path="/exam/:id" element={<SingleExamPage />} />
                <Route path="/take-exam/:examid/:sessionid" element={<TakeExamPage />} />
                <Route path="/review/:sessionid" element={<ReviewSessionPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
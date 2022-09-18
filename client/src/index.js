import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Header from './components/Header';
import Words from './components/Words';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/words" element={<Words />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//
// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));
//
// const App = () => (
//   <ThemeProvider theme={theme}>
//     <CssBaseline enableColorScheme />
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   </ThemeProvider>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

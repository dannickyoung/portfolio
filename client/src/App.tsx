import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LuxuryEditorialCV from './components/LuxuryEditorialCV';
import ExportCanvas from './components/export/ExportCanvas';
import { useExportCV } from './hooks/useExportCV';
import { CV_DATA } from './data/cvData';
import AboutPage from './components/website/pages/AboutPage';
import WorkPage from './components/website/pages/WorkPage';
import CollaborationPage from './components/website/pages/CollaborationPage';

function CVPage() {
  const { state, exportContainerRef, exportCV } = useExportCV();

  return (
    <>
      {/* Main CV View */}
      <LuxuryEditorialCV
        data={CV_DATA}
        showDownloadButton={true}
        onExport={exportCV}
        exportState={state}
      />

      {/* Hidden export canvas */}
      <ExportCanvas ref={exportContainerRef} data={CV_DATA} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:id" element={<WorkPage />} />
        <Route path="/collaboration" element={<CollaborationPage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

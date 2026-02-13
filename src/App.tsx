import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import PatioDoors from './pages/PatioDoors';
import EntryDoors from './pages/EntryDoors';
import WhyMPDoors from './pages/WhyMPDoors';
import FAQHub from './pages/FAQHub';
import Contact from './pages/Contact';
import BestSellers from './pages/BestSellers';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/patio-doors" element={<PatioDoors />} />
        <Route path="/products/entry-doors" element={<EntryDoors />} />
        <Route path="/products/best-sellers" element={<BestSellers />} />
        <Route path="/why-mp-doors" element={<WhyMPDoors />} />
        <Route path="/help-center/faq" element={<FAQHub />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/help-center/how-to-choose"
          element={
            <PlaceholderPage
              title="How to Choose Your Door"
              description="Step-by-step guide for selecting the right door for your home and climate"
            />
          }
        />
        <Route
          path="/help-center/material-comparison"
          element={
            <PlaceholderPage
              title="Material Comparison Guide"
              description="Compare composite, wood, vinyl, and steel door performance"
            />
          }
        />
        <Route
          path="/help-center/care-maintenance"
          element={
            <PlaceholderPage
              title="Care & Maintenance"
              description="Keep your MP Doors performing optimally for decades"
            />
          }
        />
        <Route
          path="/help-center/warranty"
          element={
            <PlaceholderPage
              title="Lifetime Limited Warranty"
              description="Complete warranty terms and coverage details"
            />
          }
        />
        <Route
          path="/installation-gallery/climate"
          element={
            <PlaceholderPage
              title="Installation Gallery - By Climate Zone"
              description="Real installations organized by climate conditions"
            />
          }
        />
        <Route
          path="/installation-gallery/challenge"
          element={
            <PlaceholderPage
              title="Installation Gallery - By Challenge Solved"
              description="See how MP Doors solved specific door problems"
            />
          }
        />
        <Route
          path="/installation-gallery/style"
          element={
            <PlaceholderPage
              title="Installation Gallery - By Home Style"
              description="MP Doors in different architectural styles"
            />
          }
        />
        <Route
          path="/resources/door-assessment"
          element={
            <PlaceholderPage
              title="Door Health Assessment"
              description="Interactive quiz to assess your door's condition"
            />
          }
        />
        <Route
          path="/resources/measurement-guide"
          element={
            <PlaceholderPage
              title="Measurement Guide"
              description="How to measure for your new door correctly"
            />
          }
        />
        <Route
          path="/resources/installation-guide"
          element={
            <PlaceholderPage
              title="Installation Guide"
              description="Overview of the professional installation process"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

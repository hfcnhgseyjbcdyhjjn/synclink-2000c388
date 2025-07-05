
import Hero from '../components/Hero';
import Features from '../components/Features';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfService from '../components/TermsOfService';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <Features />
      <PrivacyPolicy />
      <TermsOfService />
      <Footer />
    </div>
  );
};

export default Index;

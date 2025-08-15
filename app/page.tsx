import Hero from '@/components/Hero';
import FeaturedCourses from '@/components/FeaturedCourses';
import HighfieldApproval from '@/components/HighfieldApproval';
import QuickStats from '@/components/QuickStats';
// import UpcomingEvents from '@/components/UpcomingEvents';
// import NewsSection from '@/components/NewsSection';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HighfieldApproval />
      <QuickStats />
      <FeaturedCourses />
      {/* <UpcomingEvents /> */}
      {/* <NewsSection /> */}
      <ContactCTA />
    </div>
  );
}
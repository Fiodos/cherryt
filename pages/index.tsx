import Hero from "../components/Hero";
import MyCarousel from "../components/MyCarousel";
import PageLayout from "../components/PageLayout";
import UserFeedback from "../components/UserFeedback";

export default function Home() {
  return (
    <div>
      <PageLayout>
        <Hero />
        <UserFeedback />
        <MyCarousel />
      </PageLayout>
    </div>
  );
}

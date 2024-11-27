import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PopularShows } from "@/components/PopularShows";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <PopularShows />
      </main>
      <Footer />
    </>
  );
}

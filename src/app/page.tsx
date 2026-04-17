import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reasons from "@/components/Reasons";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* LPのメインページ：全セクションを順番に並べる */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Reasons />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

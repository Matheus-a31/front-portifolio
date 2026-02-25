import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      
      {/* O flex-grow garante que o Hero ocupe o espaço entre a Navbar e o Footer */}
      <div className="flex-grow flex items-center">
        <Hero />
      </div>

      <Footer />
    </main>
  );
}
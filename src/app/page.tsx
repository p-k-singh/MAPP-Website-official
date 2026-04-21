import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Solutions } from "@/components/solutions";
import { ServicesSection } from "@/components/services-section";
import { AboutFounder } from "@/components/about-founder";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative selection:bg-brand-accent selection:text-white">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10" />
        <div className="blob bg-brand-accent/5 top-[20%] -left-[10%] animate-blob" />
        <div className="blob bg-brand-primary-light/5 top-[60%] -right-[10%] animate-blob [animation-delay:4s]" />
      </div>

      <Navbar />
      <Hero />
      
      {/* Dynamic Section Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
      
      <Solutions />
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
      
      <ServicesSection />
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
      
      <AboutFounder />
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

      {/* Trust Section - Asymmetric Value Prop */}
      <section className="py-40 bg-white dark:bg-brand-dark overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-12 xl:col-span-7">
              <h2 className="text-xs font-black tracking-[0.5em] text-brand-accent uppercase mb-10">Verification</h2>
              <h3 className="text-5xl md:text-8xl font-black text-brand-primary dark:text-white mb-12 leading-[0.9] tracking-tighter">
                Built on Logic. <br />
                <span className="text-brand-accent opacity-50 italic">Proven</span> by Data.
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { title: "Scale-First Architecture", text: "We analyze global market shifts to prepare your portfolio for what's next, not just what's now." },
                  { title: "Institutional Rigor", text: "Access sophisticated analysis and risk tools typically reserved for high-net-worth firms." }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <p className="font-black text-2xl text-brand-primary dark:text-white tracking-tighter">{item.title}</p>
                    <p className="text-text-body dark:text-white/60 leading-relaxed font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-12 xl:col-span-5 relative">
              <div className="glass p-1 text-white rounded-[3rem] shadow-2xl relative group cursor-crosshair">
                <div className="absolute -inset-1 bg-gradient-to-br from-brand-accent to-brand-primary rounded-[3rem] opacity-20 blur-xl group-hover:opacity-40 transition-all" />
                <div className="relative bg-brand-primary dark:bg-white/5 p-12 lg:p-16 rounded-[2.9rem] overflow-hidden">
                   <div className="absolute top-0 right-0 p-10 opacity-10">
                      <div className="h-40 w-40 rounded-full border-[30px] border-brand-accent" />
                   </div>
                   <h4 className="text-3xl font-black mb-10 relative z-10 leading-tight tracking-tighter italic">"Scaling isn't just about capital—it's about the courage to maintain clarity."</h4>
                   <div className="flex items-center space-x-6 relative z-10">
                      <div className="h-16 w-16 rounded-2xl bg-brand-accent flex items-center justify-center font-black text-white text-xl shadow-lg glow-emerald">PK</div>
                      <div>
                         <p className="font-black text-xl tracking-tighter">Prabhat Kumar Singh</p>
                         <p className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.3em]">Strategist & CEO</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
      
      {/* Newly Added Why Choose Us Section */}
      <WhyChooseUs />
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

      <ContactForm />
      <Footer />
    </main>
  );
}

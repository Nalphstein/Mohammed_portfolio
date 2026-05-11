import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Recentprojects from "@/components/Recentprojects";
import { FloatingNav } from "@/components/ui/floatingnavbar";
import { navitems } from "@/data";


export default function Home() {
 return(
  <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-4 sm:px-8">
    <div className="w-full max-w-7xl space-y-10 py-6 md:space-y-12 md:py-10">
      <FloatingNav navItems={navitems}/>
     <Hero/>
     <Grid/>
     <Recentprojects/>
     <Experience/>
     <Footer/>
    </div>
  </main>
 )
}

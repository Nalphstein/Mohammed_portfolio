import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Recentprojects from "@/components/Recentprojects";
import { FloatingNav } from "@/components/ui/floatingnavbar";
import { navitems } from "@/data";


export default function Home() {
 return(
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
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

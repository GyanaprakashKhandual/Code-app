import Navbar from "./components/assets/Navbar";
import SkillsScrollBar from "./components/Skillbar";
import Nexly from "./pages/app/Home";
import ProjectCard from "./pages/app/TestProject";
import SkillsShowcase from "./pages/app/TestSkill";
import SkillsPortfolio from "./pages/app/WebSkills";

export default function Home() {
  return(
    <div>
      <Navbar/>
      <Nexly/>
    </div>
  )
}
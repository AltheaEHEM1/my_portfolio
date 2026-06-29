import IntroPage from "./home/intro-page";
import Skills from "./home/skills";
import SkillsCategories from "./home/skill-categories";

const Home = () => {
    return (
        <div>
            <IntroPage />

            <section className="max-w-7xl">
                <p className="text-[15px] pt-20 text-teal font-valorant">
                    {"02 ----// TECHNICAL SKILLS "}
                </p>

                <div className="grid lg:grid-cols-12 items-center w-full">
                    {/* Left Side */}
                    <div className=" lg:col-span-6 w-full">
                        <SkillsCategories />
                    </div>
                    {/* Right Side */}
                    <div className="lg:col-span-6 w-full flex justify-center">
                        <Skills />
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Home;
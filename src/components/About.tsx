import { aboutContent } from "../constants/aboutContent";
import myLinks from "../constants/socialLinks";
import { Button } from "./ui/button";

const About = () => {
  const lineClassName = "relative pl-8 border-l-2 border-gray-300";
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="section-title mx-auto">ABOUT ME</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Get to know me */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-xl font-bold">
              {aboutContent.introduction.title}
            </h3>
            <div className="space-y-4 text-gray-700">
              {aboutContent.introduction.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column - Background */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-xl font-bold">
              {aboutContent.background.title}
            </h3>
            <div className="space-y-6 text-gray-700">
              {aboutContent.background.experience.map((item, index) => (
                <div key={index} className={lineClassName}>
                  <BulletPoint />
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-gray-500">
                    {item.company} • {item.period}
                  </div>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const BulletPoint = () => {
  return (
    <div className="absolute left-[-9px] top-0">
      <div className="w-4 h-4 bg-black rounded-full"></div>
    </div>
  );
};

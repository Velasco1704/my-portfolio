import { motion } from "framer-motion";
import { fadeIn } from "@src/variants";
import { TfiHtml5, TfiCss3 } from "react-icons/tfi";
import { FaSass, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const About = () => {
  return (
    <section
      id="studies"
      className="text-white flex items-center w-full h-[100svh]"
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mx-10 flex flex-col items-center gap-[60px] lg:flex-row"
      >
        <div className="flex flex-col justify-center items-center lg:w-full">
          <h2 className="mb-4 font-bold text-4xl text-center lg:text-6xl">
            About Me
          </h2>
          <p className="text-center xl:w-[80%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            quam inventore odio autem alias laudantium doloremque doloremque
            fugit ipsam enim hic liic liic libero,
            distinctiodistinctiodistinctio, porro necessitatibus veniam sint
            rerum maiores. Quia, facilis.
          </p>
        </div>
        <div>
          <h2 className="mb-5 font-bold text-4xl text-center lg:text-6xl">
            Skills
          </h2>
          <div className="flex flex-row flex-wrap justify-center gap-10 text-5xl md:text-6xl lg:text-7xl bg-white/10 p-4 rounded-md ">
            <div className="text-red-500">
              <TfiHtml5 />
            </div>
            <div className="text-blue-500">
              <TfiCss3 />
            </div>
            <div className="text-yellow-400">
              <SiJavascript />
            </div>
            <div className="text-blue-500">
              <SiTypescript />
            </div>
            <div className="text-green-500">
              <FaNodeJs />
            </div>
            <div className="text-cyan-400">
              <SiReact />
            </div>
            <div className="text-orange-500">
              <FaGitAlt />
            </div>
            <div className="text-cyan-500">
              <SiTailwindcss />
            </div>
            <div className="text-pink-500">
              <FaSass />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

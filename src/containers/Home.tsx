import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "@src/variants";

export const Home = () => {
  return (
    <section id="home" className="text-white flex items-center w-full h-[93svh]">
      <div className="w-full mx-auto flex flex-col justify-center items-center gap-y-20">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-6xl md:text-7xl text-black text-center bg-white/30 mx-10 py-6 px-3 rounded-md"
        >
          Daniel <span className="font-primary font-bold">VELASCO</span>
        </motion.h1>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-2xl lg:text-3xl"
        >
          <span className="mr-2">I'm a</span>
          <TypeAnimation
            wrapper="span"
            repeat={Infinity}
            speed={45}
            sequence={["FrontEnd Developer", 2000, "Software engineer", 2000]}
          />
        </motion.div>
      </div>
    </section>
  );
};

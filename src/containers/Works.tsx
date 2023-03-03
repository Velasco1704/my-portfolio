import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import tesla from "@assets/tesla.jpg";
import rolex from "@assets/rolex.jpg";
import todo from "@assets/todo.jpg";
import netflix from "@assets/netflix.jpg";

export const Works = () => {
  return (
    <section
      id="works"
      className="text-white flex items-center w-full h-[100vh]"
    >
      <div className="mx-auto flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl lg:text-7xl">My Projects</h1>
        <div className="mx-5 grid grid-cols-2 gap-2 lg:grid-cols-3 lg:w-3/4">
          <div className="relative">
            <h3 className="text-lg text-center bg-black/60 rounded-t-md lg:text-xl">
              Teslas App
            </h3>
            <img className="rounded-b-md" src={tesla} alt="tesla" />
            <a
              href=""
              target="_blank"
              className="absolute bottom-4 right-2 bg-black/30 p-2 rounded-[50%]"
            >
              <BsArrowUpRight />
            </a>
            <a
              href=""
              target="_blank"
              className="absolute bottom-4 right-12 bg-black/30 p-2 rounded-[50%]"
            >
              <BsGithub />
            </a>
          </div>
          <div className="relative">
            <h3 className="text-lg text-center bg-black/60 rounded-t-md lg:text-xl">
              Rolex App
            </h3>
            <img className="rounded-b-md" src={rolex} alt="rolex" />
            <a
              href=""
              target="_blank"
              className="absolute bottom-4 right-2 bg-black/30 p-2 rounded-[50%]"
            >
              <BsArrowUpRight />
            </a>
            <a
              href=""
              target="_blank"
              className="absolute bottom-4 right-12 bg-black/30 p-2 rounded-[50%]"
            >
              <BsGithub />
            </a>
          </div>
          <div className="relative">
            <h3 className="text-lg text-center bg-black/60 rounded-t-md lg:text-xl">
              ToDo App
            </h3>
            <img className="rounded-b-md" src={todo} alt="todo" />
            <a
              href=""
              target="_blank"
              className="absolute bottom-4 right-2 bg-black/30 p-2 rounded-[50%]"
            >
              <BsArrowUpRight />
            </a>

            <a
              href=""
              target="_blank"
              className="absolute bottom-4 right-12 bg-black/30 p-2 rounded-[50%]"
            >
              <BsGithub />
            </a>
          </div>
          <div className="relative">
            <h3 className="text-lg text-center bg-black/60 rounded-t-md lg:text-xl">
              Netflix App
            </h3>
            <img className="rounded-b-md" src={netflix} alt="netflix" />
            <a
              href="https://my-netflix-app-dv.netlify.app"
              target="_blank"
              className="absolute bottom-4 right-2 bg-black/30 p-2 rounded-[50%]"
            >
              <BsArrowUpRight />
            </a>

            <a
              href="https://github.com/Velasco1704/Netflix-app"
              target="_blank"
              className="absolute bottom-4 right-12 bg-black/30 p-2 rounded-[50%]"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

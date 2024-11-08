import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full pt-4 mb-10">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/JohnnyBC2022/resume-articulos-ai");
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Resume artículos con <br className="max-md:hidden" />{" "}
        <span className="blue_gradient">Open AI GPT-4</span>
      </h1>
      <h2 className="desc">
        Ahorra tiempo de lectura con ResAI, una aplicación para resumir artículos de código abierto que transforma artículos extensos en resúmenes claros y
        concisos.
      </h2>
    </header>
  );
};

export default Hero;

import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
const NextStep = () => {
  return (
    <div className="w-[100vw] flex justify-center items-center h-screen bg-purple-300">
      <BackgroundGradientAnimation>
        <h1 className="text-7xl font-extrabold font-mono text-white">
          Missao concluida
        </h1>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default NextStep;

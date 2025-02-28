import Img from "../components/image/icon.png"

function Train() {
  return (
    <>
      <div className="bg-[url('./components/image/BG.png')] bg-cover bg-center md:text-center px-10 py-10">
        <h1 className="text-2xl text-white pt-3">Train your aiDR on your...</h1>
        <h1 className="text-xl text-[#0FF1F6]">prefered email st|</h1>
        <p className="text-white pt-5 pb-3 md:px-80">
          You’re in control. Train your aiDR on elements of your Marketing
          strategy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 text-white md:text-center gap-3 justify-center items-center md:ml-52 md:px-32 text-xs">
          <div className="flex gap-2">
            <img className="text-white" src={Img} alt="" />
            <p>Quick to ramp</p>
          </div>
          <div className="flex gap-2 md:ml-[-80px]">
            <img className="text-white" src={Img} alt="" />
            <p>Easy to optimize</p>
          </div>
          <div className="flex gap-2">
            <img className="text-white" src={Img} alt="" />
            <p>Quick to scale up</p>
          </div>
          <div className="flex gap-2 md:ml-[-80px]">
            <img className="text-white" src={Img} alt="" />
            <p>Works with all your existing tools</p>
          </div>
        </div>
      </div>
    </>
  );
}


export default Train;
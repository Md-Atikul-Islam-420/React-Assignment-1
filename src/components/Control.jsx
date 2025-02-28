import Img from "../components/image/Vector.png"
import Img2 from "../components/image/Group.png"
import Img3 from "../components/image/vector2.png"


function Control() {
  const controls = [
    {
      imgss: Img,
      heading: 'You’re in Control',
      paragraph:
        'aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.',
    },
    {
      imgss: Img2,
      heading: 'Infinitely Scalable',
      paragraph:
        'Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.',
    },
    {
      imgss: Img3,
      heading: 'Incredibly Flexible',
      paragraph:
        'Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {controls.map(item => (
          <div className=" bg-black text-white grid-cols-12 pt-5" key={item}>
            <div className="mx-5 col-span-4 pb-5">
              <img
                className="text-[#0FF1F6] size-[30px]"
                src={item.imgss}
                alt=""
              />
              <h1 className="text-2xl">{item.heading}</h1>
              <p>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Control;
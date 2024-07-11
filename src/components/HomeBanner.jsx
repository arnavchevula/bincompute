import {
  HiOutlineWrenchScrewdriver,
  HiOutlinePencilSquare
} from "react-icons/hi2";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import "./HomeBanner.css";

const iconMap = [
  {
    title: "Design",
    text:
      "Great software starts with exceptional design. Our design process is rooted in a deep understanding of your business goals and user needs.",
    icon: <HiOutlinePencilSquare />
  },
  {
    title: "Build",
    text:
      "We bring your ideas to life with precision and expertise. We develop robust high performance applications using the clients preferred tech stack.",
    icon: <HiOutlineWrenchScrewdriver />
  },
  {
    title: "Execute",
    text:
      "Execution is where strategy and planning come to fruition. Our experienced project managers ensure that your projects are delivered on time, within scope, and on budget,",
    icon: <IoCheckmarkCircleOutline />
  }
];
function HomeBanner({}) {
  return (
    <section className="Banner" id="banner">
      <div className="Banner__Container">
        {iconMap.map(element => {
          return (
            <div className="Banner__Panel">
              {element.icon}
              <div>
                <h1>{element.title}</h1>
                <p>{element.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeBanner;

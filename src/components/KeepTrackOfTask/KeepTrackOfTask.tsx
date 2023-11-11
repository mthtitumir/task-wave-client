import Arrow from "../Arrow/Arrow";
import Texts from "../Texts/Texts";
import myVideo from "../../Videos/user_Dashbaord.mp4";
import Video from "../Video/Video";
import Scribfolio from "../Scribfolio/Scribfolio";
const KeepTrackOfTask = () => {
  return (
    <div>
      <div className="flex justify-between animate-pulse">
        <Scribfolio/>
        <Arrow />
      </div>
      <div className="flex justify-between items-center lg:flex-row-reverse flex-col-reverse gap-10 h-[700px] lg:h-[500px]">
        <div>
          <Texts
            styledTitle="Task"
            headerText="Effortless Management"
            peragraphText="Simplify your life with our user-friendly dashboard. Create, prioritize, and track your tasks hassle-free."
          />
        </div>
        <div>
          <Video VideoSource={myVideo} />
        </div>
      </div>
    </div>
  );
};

export default KeepTrackOfTask;

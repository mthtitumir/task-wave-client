import "./ManageTask.css";
import taskVideo from "../../Videos/8c50c501e872ba1d5ff52e5ad2b5b637.mp4";
const ManageTask = () => {
  return (
    <div className="flex justify-between items-center lg:flex-row flex-col gap-10 h-[500px]">
      <div className="basis-1/2">
        <div className="px-8 space-y-8">
          <h1 className="text-5xl font-bold leading-[1.2]">
            Manage Your
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#fcff2f] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#f9ff40] mx-3">
              Tasks
            </span>
            Online Easliy.
          </h1>
          <p className="text-sm text-justify">
            With task wave you can effortlessly streamline your workflow,
            prioritize assignments, and ensure nothing falls through the cracks.
            Our user-friendly interface allows you to create, edit, and
            categorize tasks with ease, ensuring you have a clear overview of
            your upcoming commitments.
          </p>
        </div>
      </div>
      <div className="basis-1/2 relative">
        <video  width="100%"  height="auto" muted autoPlay playsInline loop preload="metadata">
          <source src={taskVideo} className="z-50" type="video/mp4" />
          {/* You can add additional source elements for different video formats */}
        </video>
        <div className="glow-bg"></div>
      </div>
    </div>
  );
};

export default ManageTask;

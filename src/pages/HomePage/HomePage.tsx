import HomeBanner from "../../components/HomeBanner/HomeBanner";
import KeepTrackOfTask from "../../components/KeepTrackOfTask/KeepTrackOfTask";
import ManageTask from "../../components/ManageTask/ManageTask";
import Sponsors from "../../components/Sponsors/Sponsors";

const HomePage = () => {
  return (
    <div className="mt-16 lg:px-28 px-4 lg:py-6  py-4 text-white space-y-8">
      <HomeBanner />
      <Sponsors />
      <ManageTask />
      <KeepTrackOfTask/>
    </div>
  );
};

export default HomePage;

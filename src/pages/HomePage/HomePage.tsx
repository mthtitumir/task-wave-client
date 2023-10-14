import BusinessSegment from "../../components/BusinessSegment/BusinessSegment";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import IncreaseProductivity from "../../components/IncreaseProductivity/IncreaseProductibity";
import KeepTrackOfTask from "../../components/KeepTrackOfTask/KeepTrackOfTask";
import KeePTrackOfYourBusiness from "../../components/KeepTrackOfYourBusiness/KeePTrackOfYourBusiness";
import ManageTask from "../../components/ManageTask/ManageTask";
import Sponsors from "../../components/Sponsors/Sponsors";
import User from "../../components/Users/User";

const HomePage = () => {
  return (
    <div className="mt-16 lg:px-28 px-4 lg:py-6  py-4 text-white space-y-8">
      <HomeBanner />
      <Sponsors />
      <ManageTask />
      <KeepTrackOfTask/>
      <KeePTrackOfYourBusiness/>
      <User/>
      <IncreaseProductivity/>
      <BusinessSegment/>
    </div>
  );
};

export default HomePage;

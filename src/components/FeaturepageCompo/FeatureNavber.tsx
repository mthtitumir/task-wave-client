import { useState } from "react";
import InitialWork from "./InitialWork";
import StructureWork from "./StructureWork";
import Collaborate from "./Collaborate";
import Report from "./Report";
import Integrations from "./Integrations";
import Workspace from "./Workspace";

const FeatureNavber: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>("initial");

    // Function to handle item clicks
    const handleItemClick = (item: string) => {
        setSelectedItem(item);
    };

    return (
        <div>
            <nav className="mt-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div
                        className="md:flex md:items-center md:w-auto"
                    >
                        <ul className="md:flex md:space-x-4 md:gap-10 pl-4">
                            <li>
                                <a
                                    onClick={() => handleItemClick("initial")}
                                    className={selectedItem === "initial" ? "text-pink-500 border-b border-b-orange-700" : "text-orange-400"}
                                >
                                    Initial Work
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => handleItemClick("structure")}
                                    className={selectedItem === "structure" ? "text-pink-500 border-b border-b-orange-700" : "text-orange-400"}
                                >
                                    Structure Work
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => handleItemClick("collaborate")}
                                    className={selectedItem === "collaborate" ? "text-pink-500 border-b border-b-orange-700" : "text-orange-400"}
                                >
                                    Collaborate
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => handleItemClick("report")}
                                    className={selectedItem === "report" ? "text-pink-500 border-b border-b-orange-700" : "text-orange-400"}
                                >
                                    Report & Analyze
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => handleItemClick("integration")}
                                    className={selectedItem === "integration" ? "text-pink-500 border-b border-b-orange-700" : "text-orange-400"}
                                >
                                    Integrations & Automation
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => handleItemClick("workspace")}
                                    className={selectedItem === "workspace" ? "text-pink-500 border-b border-b-orange-700" : "text-orange-400"}
                                >
                                    Manage Your Workspace
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Conditional rendering of content */}
            <div className="mt-4 mx-auto max-w-7xl">
                {/* Render content based on the selected item */}
                {selectedItem === "initial" && (
                    <div>
                        <InitialWork></InitialWork>
                        {/* Add your content here */}
                    </div>
                )}
                {selectedItem === "structure" && (
                    <div>
                        <StructureWork></StructureWork>
                    </div>
                )}
                {selectedItem === "collaborate" && (
                    <div>
                        <Collaborate></Collaborate>
                    </div>
                )}
                {selectedItem === "report" && (
                    <div>
                        <Report></Report>
                    </div>
                )}
                {selectedItem === "integration" && (
                    <div>
                        <Integrations></Integrations>
                    </div>
                )}
                {selectedItem === "workspace" && (
                    <div>
                        <Workspace></Workspace>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeatureNavber;

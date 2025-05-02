import Card from "@/components/Card";
import { useEffect, useState } from "react";

const base = import.meta.env.APP_BASE_PATH || "";

function Dashboard() {
  let [spdkVersion, setSpdkVersion] = useState("unknown");
  useEffect(() => {
    fetch(`${base}/api/v1/spdk/spdk_version`).then((response) =>
      response.json().then((data) => {
        setSpdkVersion(data.version);
      })
    );
  }, []);

  return (
    <div className="flex-col p-8">
      <div className="flex space-x-10 justify-center">
        {/* Example Card 1 */}
        <Card status={spdkVersion === "unknown" ? "dead" : "alive"}>
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold">{spdkVersion}</span>
          </div>
        </Card>

        {/* Example Card 2 */}
        <Card className="text-white">
          <h3 className="text-xl font-semibold mb-2">Settings</h3>
          <p className="text-sm text-gray-300">
            Configure your preferences here. The dot pattern is overlaid on the
            blurred background.
          </p>
          <button className="mt-4 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md text-sm font-medium">
            Learn More
          </button>
        </Card>

        {/* Example Card 3 */}
        <Card>
          <div className="text-white/90">
            <p>
              This card demonstrates the effect. The background page gradient
              should be visible but blurred behind this card, and the subtle dot
              pattern is layered on top of the blur, just beneath this text.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;

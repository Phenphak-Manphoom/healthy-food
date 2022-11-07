import React from "react";
import healthyFood from "../foodData.js";
import HealthyFood from "../components/HealthyFood";

export default function Homepage() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 h-screen place-items-center m-12">
        {healthyFood.map((food) => {
          return (
            <div className="w-9/12">
              <div>
                <HealthyFood food={food} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

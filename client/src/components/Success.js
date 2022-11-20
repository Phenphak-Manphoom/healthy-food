import React from "react";

export default function Success({ success }) {
  return (
    <div
      class="bg-green-100 rounded-lg py-3 px-6  text-base text-green-700 mb-3 shadow-xl"
      role="alert"
    >
      {success}
    </div>
  );
}

import React from "react";

export default function Error({ error }) {
  return (
    <div
      className="bg-red-100 rounded-lg py-3 px-6  text-base text-red-700 mb-3"
      role="alert"
    >
      {error}
    </div>
  );
}

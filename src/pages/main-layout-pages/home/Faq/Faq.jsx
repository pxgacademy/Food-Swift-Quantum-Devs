import { useState } from "react";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("customer");
  return (
    <div className="max-w-xl mx-auto mt-10">
      {/* tabs */}
      <div className="flex gap-2 justify-center mb-5">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "customer"
              ? "bg-red-500 text-white"
              : "bg-gray-200 dark:text-black"
          }`}
          onClick={() => setActiveTab("customer")}
        >
          I’m a customer
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "foodman"
              ? "bg-red-500 text-white"
              : "bg-gray-200 dark:text-black"
          }`}
          onClick={() => setActiveTab("foodman")}
        >
          I’m a Food man
        </button>
      </div>
    </div>
  );
};

export default Faq;

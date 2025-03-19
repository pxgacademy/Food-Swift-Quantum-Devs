import { useState } from "react";
import { BsArrowRight, BsArrowRightShort } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("customer");
  const [openFAQ, setOpenFAQ] = useState(null);
  const faqs = [
    {
      question: "I got the wrong food. What should I do?",
      ans: "Please contact our Customer Service Manager with a photo of the food box you ate.",
    },
    {
      question: "My foodman’s number is unreachable. What should I do?",
      ans: "Please contact our help center and tell us about your problem. Hopefully you will find a solution to your problem there.",
    },
    {
      question: "The foodman refused to take my order. What can I do?",
      ans: "You can complain to our help center with the name of that foodman and his phone number and order the food you want to get from our app.",
    },
    {
      question: "The foodman cancelled my order. What should I do?",
      ans: "You can complain to our Help Center by telling us what location and when your order is being canceled.",
    },
    {
      question:
        "I forgot to apply promo code on my food order. What can I do now?",
      ans: "Then you go to our help center and tell us about your problem. Then if you are interested in getting the food, give us your phone number.",
    },
    {
      question:
        "I want to order from a restaurant that is not in the app. Possible?",
      ans: "No, it is not possible. Because we only allow entry of all good quality restaurants in our app. We do not allow any local restaurants in our app.",
    },
  ];
  const foodMan = [
    {
      question: "The ordered food is not available. What to do?",
      ans: "You will receive your food in a few moments. Our foodman is now on the road to your address. After this, I will inform your foodman about your star again.",
    },
    {
      question: "My customer’s number is unreachable. What should I do?",
      ans: "Please take a picture of the box for which you are not getting the customer number and send it to our Help Center.",
    },
    {
      question: "My customer cancelled the order. What should I do?",
      ans: "Take a picture of the box of the customer who canceled the order and submit it to our Help Center.",
    },
    {
      question: "Restaurant not available temporarily. What should I do?",
      ans: "You give that customer's number to our help center and tell them the problem.",
    },
    {
      question:
        "Customer wanted the food from different restaurant. Should I proceed?",
      ans: "No, you know that we do not allow local restaurants to enter our app. You should report the problem to our help center.",
    },
    {
      question: "The delivery address is more than 3 km? Should I deliver?",
      ans: "Yes, you will deliver, but before that, you must inform the customer that if the distance is more than 3 kilometers, he will have to pay extra delivery.",
    },
  ];
  return (
    <div className="max-w-[1600px] mx-auto lg:py-12 py-6">
      <h3 className="text-center lg:text-5xl md:text-3xl text-2xl mb-10">
        Frequently Asked Questions
      </h3>
      {/* tabs */}
      <div className="flex gap-2 justify-center mb-5">
        <button
          className={`px-4 py-2 text-xl rounded ${
            activeTab === "customer"
              ? "bg-primaryColor hover:bg-[#F29F05] text-white"
              : "bg-gray-200 dark:text-black"
          }`}
          onClick={() => setActiveTab("customer")}
        >
          I’m a customer
        </button>
        <button
          className={`px-4 py-2 text-xl rounded ${
            activeTab === "foodman"
              ? "bg-primaryColor hover:bg-[#F29F05] text-white"
              : "bg-gray-200 dark:text-black"
          }`}
          onClick={() => setActiveTab("foodman")}
        >
          I’m a Food man
        </button>
      </div>
      {/* FAQ section */}
      <div className="space-y-3">
        {activeTab === "customer" ? (
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="py-2">
                <button
                  className="flex justify-items-start items-center w-full text-left text-xl font-medium gap-3 dark:text-white"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {openFAQ === index ? (
                    <FiMinus className="text-red-500" />
                  ) : (
                    <FiPlus className="text-red-500" />
                  )}
                  {faq.question}
                </button>
                {openFAQ === index && (
                  <p className="mt-2 ml-8 text-lg">{faq.ans}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>
            {foodMan.map((faq, index) => (
              <div key={index} className="py-2">
                <button
                  className="flex justify-items-start items-center w-full text-left text-xl font-medium gap-3 dark:text-white"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {openFAQ === index ? (
                    <FiMinus className="text-red-500" />
                  ) : (
                    <FiPlus className="text-red-500" />
                  )}
                  {faq.question}
                </button>
                {openFAQ === index && (
                  <p className="mt-2 ml-8 text-lg ">{faq.ans}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* btn view all FAQ */}
      <div className="flex items-center justify-center mt-10">
        <button className="flex items-center justify-between btn text-2xl text-white font-normal bg-primaryColor hover:bg-[#F29F05]">
          View all FAQ
          <span className="text-red-500 ml-2">
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Faq;

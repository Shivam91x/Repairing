import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "How can I book a repair service?",
    answer: "Whatsapp par message ya call karke repair service book kar sakte ho."
  },
  {
    question: "Are the products available for online purchase?",
    answer: "Products offline purchase ke liye available hai. Website ke through Whatsapp ya call karke details bhi le sakte ho."
  },
  {
    question: "Do you provide warranty on repairs?",
    answer: "Haan, selected repairs par warranty provide ki jaati hai. Warranty duration service ke type par depend karta hai."
  },
  {
    question: "How could you order appliance items?",
    answer: "Aap products website ke through order request kar sakte ho ya directly hamare shop visit kar sakte ho (Mahalakshmi Nagar Indore & Bhawarkuwa Indore)."
  }
  
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="../FaqImg.jpg" // replace with your user-thinking image
            alt="User thinking about booking repair or purchase"
            className="w-82 h-82 object-contain bg-transparent mix-blend-multiply"
          />
        </motion.div>

        {/* Right FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border rounded-2xl shadow-sm cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
                    {faq.question}
                    <span className="ml-2 text-gray-500">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </h3>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-600 mt-2"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

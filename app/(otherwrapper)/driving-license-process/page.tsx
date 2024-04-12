import { Ad1, Ad2, Ad3, Ad4 } from "@/components/ads/ads";
import Footer from "@/components/navigation/footer";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Driver's License: Do you know how to get your driver's license?",
  description:
    "Learn how to get your driver's license, follow all the tips and process steps on the documentation.",
  keywords:
    "Driving License Test Online India,Learner's License Test Online India,Driving License Exam Fees India,Driving License Test Booking Online India,Driving License Exam,RTO Driving License Test,New Traffic Rules in India,Traffic Challan Online Payment India,Traffic Violation Fines India,Traffic Signs and Meanings India,Driving Licence Test Signals India",
};

const PanCardApply = () => {
  return (
    <main>
      <div className="w-full flex flex-col gap-y-1">
        <div className="w-full h-20 flex items-center justify-center bg-[#0072aa]">
          <h2 className="text-white text-2xl font-medium max-w-7xl mx-auto px-2">
            ड्राइवर का लाइसेंस
          </h2>
        </div>
        <div className="max-w-7xl mx-auto w-full flex items-start justify-start my-1 px-2">
          <p className="font-semibold">
            ड्राइवर का लाइसेंस: क्या आप जानते हैं कि अपना ड्राइविंग लाइसेंस कैसे
            प्राप्त करें?
          </p>
        </div>
        <Ad1 />
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-y-4 items-start justify-start my-1">
          <p className="w-full text-justify px-2">
            भारत में गाड़ी चलाने के लिए तैयार हो रहे हैं? अपना &apos;ड्राइविंग
            लाइसेंस&apos; प्राप्त करने का तरीका समझें! पहला नियम स्पष्ट है:
            न्यूनतम आयु 18 वर्ष है। फॉर्म भरने से लेकर शारीरिक, दृश्य और लिखित
            परीक्षण पास करने, अपने पास ड्राइवर मैनुअल के साथ यातायात नियमों और
            संकेतों की जांच करने तक के चरणों का पालन करें। 📚🚦 अंत में, अभ्यास
            परीक्षण में अपने कौशल का प्रदर्शन करें और प्रक्रिया की अंतिम रेखा को
            पार करें।
          </p>
          <Ad4 />
          <p className="w-full text-justify px-2">
            लेकिन ध्यान दीजिये! 📝 अपने दस्तावेज़ इकट्ठा करें - पासपोर्ट, वीज़ा,
            पते का प्रमाण, फ़ोटो और अपना विशिष्ट पहचानकर्ता - चाहे वह आधार
            कार्ड, पैन कार्ड, या पासपोर्ट ही हो। सुनिश्चित करें कि आपकी यात्रा
            को तेज़ करने के लिए आपकी प्रतियां प्रमाणित हैं। 🏁 प्रस्थान करने से
            पहले, यह देखने के लिए अपने स्थानीय आरटीओ की जाँच करें कि क्या जमा
            करने के लिए कोई और कागजात हैं। संगठन और ध्यान के साथ, आप जल्द ही
            भारतीय सड़कों पर गाड़ी चलाने के लिए तैयार होंगे! 🚧👍
          </p>
        </div>
        <Link
          href={"/driving-license-process-2024"}
          className="max-w-7xl mx-auto w-full flex items-center justify-center my-1 px-2"
        >
          <Image src={"/driving.png"} alt="pan card" width={500} height={500} />
        </Link>
        <Ad2 />
        <div className="max-w-7xl mx-auto w-full flex items-center justify-center flex-col my-4 px-2 gap-y-2">
          <Link
            href={"/driving-license-process-2024"}
            className="w-full rounded-full bg-[#0072aa] text-xl hover:bg-[#005eaa] text-white text-center py-4 md:py-6"
          >
            चरण दर चरण देखें
          </Link>
          <Link
            href={"/driving-license-process-2024"}
            className="w-full rounded-full bg-[#0072aa] text-xl hover:bg-[#005eaa] text-white text-center py-4 md:py-6"
          >
            संपूर्ण गाइड{" "}
          </Link>
        </div>
        <Ad3 />
      </div>
      <Footer />
    </main>
  );
};

export default PanCardApply;

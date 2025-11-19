import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { GiClassicalKnowledge } from "react-icons/gi";
import { FaMapLocation } from "react-icons/fa6";
import { SiIssuu } from "react-icons/si";
import { GoProject } from "react-icons/go";
import { MdGppGood } from "react-icons/md";

function WhyUs() {
  const features = [
    {
      title: "تأیید شده به‌عنوان شرکت دانش‌بنیان",
      text: "اتکا به رویکرد پژوهش‌محور و توسعه فناوری‌های نوین، ما را به یک شریک قابل اعتماد برای سازمان‌ها تبدیل کرده است.",
      icon: <GiClassicalKnowledge className="w-7 h-7" />,
    },
    {
      title: "تخصص عمیق در اطلاعات مکانی",
      text: "حضور در کارگروه اطلاعات مکانی وزارت نیرو، پشتوانه کیفیت و دقت راهکارهای ماست.",
      icon: <FaMapLocation className="w-7 h-7" />,
    },
    {
      title: "راهکارهای دقیق و سفارشی",
      text: "به‌جای راه‌حل‌های تکراری، ساختار هر پروژه را متناسب با نیاز واقعی طراحی و اجرا می‌کنیم.",
      icon: <SiIssuu className="w-7 h-7" />,
    },
    {
      title: "تجربه پروژه‌های ملی",
      text: "سال‌ها همکاری در طرح‌های زیرساختی کشور، توان اجرایی ما را اثبات کرده است.",
      icon: <GoProject className="w-7 h-7" />,
    },
    {
      title: "تعهد به کیفیت و شفافیت",
      text: "گزارش‌دهی شفاف، مستندسازی کامل و تحویل خروجی قابل سنجش، اصول ثابتی در تمام پروژه‌ها هستند.",
      icon: <MdGppGood className="w-7 h-7" />,
    },
  ];

  return (
    <section
      id="whyus"
      className="scroll-mt-28 w-full py-5 bg-tertiary rounded-md"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Title & Description */}
        <div className="w-full flex flex-col">
          <h2 className="text-4xl font-extrabold text-[#1c999a] leading-snug mb-6">
            چرا اندیشه هوشمند مانا؟
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-10">
            ما با ترکیب تخصص، تجربه پروژه‌های ملی و پشتوانه دانش‌بنیان،
            راهکارهایی ارائه می‌دهیم که برای تصمیم‌گیری دقیق و توسعه پایدار
            سازمان‌ها طراحی شده‌اند.
          </p>

          <div className="relative">
            <Image
              src="/images/tehran2.png"
              width={1000}
              height={1000}
              alt="tehran"
              className="w-full mb-10"
            />
            <span className="absolute top-8 left-5 animate-float animate-float-delay-1 text-yellow-300">
              <SlLocationPin className="w-8 h-8" />
            </span>

            <span className="absolute top-12 right-5 animate-float animate-float-delay-2 text-yellow-300">
              <SlLocationPin className="w-6 h-6" />
            </span>

            <span className="absolute top-2 right-48 animate-float animate-float-delay-3 text-yellow-300">
              <SlLocationPin className="w-10 h-10" />
            </span>
          </div>
          {/* Optional Highlight Box */}
          <div className="p-6 bg-quaternary rounded-lg shadow-sm">
            <p className="text-gray-800 font-semibold">
              تمرکز ما روی ارائه راهکارهای قابل سنجش، نوآورانه و همسو با نیاز
              واقعی صنعت است.
            </p>
          </div>
        </div>

        {/* Right Side - Feature List */}
        <div className="grid gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 sm:h-20 bg-[#d2ecec] rounded-xl 
                         border border-[#1c999a]/20 shadow-sm hover:shadow-md transition-all"
            >
              {/* Icon Circle */}
              <div className="w-[10%]">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full 
                                border-2 border-[#1c999a] text-[#1c999a] text-xl font-bold"
                >
                  {f.icon}
                </div>
              </div>

              {/* Text */}
              <div className="w-[90%]">
                <h3 className="font-bold text-[#1c999a] mb-1">{f.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;

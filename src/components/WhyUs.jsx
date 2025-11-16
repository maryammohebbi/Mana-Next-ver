import Image from "next/image";

function WhyUs() {
  const features = [
    {
      title: "تأیید شده به‌عنوان شرکت دانش‌بنیان",
      text: "اتکا به رویکرد پژوهش‌محور و توسعه فناوری‌های نوین، ما را به یک شریک قابل اعتماد برای سازمان‌ها تبدیل کرده است.",
    },
    {
      title: "تخصص عمیق در اطلاعات مکانی",
      text: "حضور در کارگروه اطلاعات مکانی وزارت نیرو، پشتوانه کیفیت و دقت راهکارهای ماست.",
    },
    {
      title: "راهکارهای دقیق و سفارشی",
      text: "به‌جای راه‌حل‌های تکراری، ساختار هر پروژه را متناسب با نیاز واقعی طراحی و اجرا می‌کنیم.",
    },
    {
      title: "تجربه پروژه‌های ملی",
      text: "سال‌ها همکاری در طرح‌های زیرساختی کشور، توان اجرایی ما را اثبات کرده است.",
    },
    {
      title: "تعهد به کیفیت و شفافیت",
      text: "گزارش‌دهی شفاف، مستندسازی کامل و تحویل خروجی قابل سنجش، اصول ثابتی در تمام پروژه‌ها هستند.",
    },
  ];

  return (
    <section className="w-full py-24 bg-tertiary">
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

          <Image
            src="/images/tehran.png"
            width={1000}
            height={1000}
            alt="tehran"
            className="w-full mb-14"
          />
          {/* Optional Highlight Box */}
          <div className="p-6 bg-[#ffeb3b9e] rounded-lg border border-[#ffeb3b] shadow-sm">
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
              className="flex items-center gap-4 p-6 bg-[#d2ecec] rounded-xl border border-[#1c999a]/20 shadow-sm hover:shadow-md transition-all"
            >
              {/* Icon Circle */}
              <div className="w-[10%]">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#1c999a] text-[#1c999a] text-xl font-bold">
                  {i + 1}
                </div>
              </div>

              {/* Text */}
              <div className="w-[90%]">
                <h3 className="text-lg font-bold text-[#1c999a] mb-1">
                  {f.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;

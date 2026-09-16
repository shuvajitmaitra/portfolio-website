import { FaCalendarAlt, FaGraduationCap, FaUniversity } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "BSc in Electrical and Electronic Engineering",
      institution: "European University of Bangladesh",
      duration: "2021 - 2025",
      status: "Completed",
      icon: <FaGraduationCap />,
      color: "from-blue-500 to-cyan-400",
      borderColor: "border-cyan-400",
      description:
        "Successfully completed my BSc in Electrical and Electronic Engineering (EEE). An exhilarating journey that allowed me to explore the intricacies of electrical systems and electronics. The program provided me with a robust foundation in EEE principles, igniting a passion for innovation and problem-solving within the field.",
      highlights: [
        "Strong foundation in electrical systems",
        "Electronics and circuit design",
        "Problem-solving and innovation focus",
        "Engineering project management",
      ],
    },
    {
      id: 2,
      degree: "Diploma in Electrical Engineering",
      institution: "Digital Polytechnic Institute",
      duration: "2015 - 2019",
      status: "Completed",
      icon: <MdElectricalServices />,
      color: "from-purple-500 to-pink-400",
      borderColor: "border-purple-400",
      description:
        "Successfully completed my diploma in engineering in 2019. This achievement marks a significant milestone in my academic journey, providing essential technical knowledge and hands-on experience that formed the foundation for my engineering career.",
      highlights: [
        "Technical engineering fundamentals",
        "Hands-on practical experience",
        "Engineering project development",
        "Professional skill development",
      ],
    },
  ];

  return (
    <div id="Education" className="min-h-screen bg-gray-900 text-white py-16 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4 sm:mb-6">
            EDUCATION
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey in electrical engineering, building the foundation for innovation and problem-solving
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"></div>

          {/* Education Items */}
          <div>
            {educationData.map((education, index) => (
              <div
                key={education.id}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } mb-12 sm:mb-16 md:gap-16`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-12 sm:top-16 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-gradient-to-r ${education.color} border-4 border-gray-900 z-10 flex items-center justify-center`}
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Content Card */}
                <div className={`mt-8 sm:mt-12 ml-14 sm:ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "" : "md:text-right"}`}>
                  <div
                    className={`group bg-gray-800 rounded-2xl p-6 sm:p-8 border-2 ${education.borderColor} hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-500 hover:scale-105`}
                  >
                    {/* Header */}
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"}`}>
                      <div
                        className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${education.color} group-hover:rotate-12 transition-transform duration-500`}
                      >
                        <span className="text-white text-xl sm:text-2xl">{education.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                          {education.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-300 mb-2">
                          <FaUniversity className="text-purple-400 text-base sm:text-lg" />
                          <span className="font-medium text-sm sm:text-base">{education.institution}</span>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <FaCalendarAlt className="text-green-400 text-sm sm:text-base" />
                            <span>{education.duration}</span>
                          </div>
                          <div
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${education.color} text-white`}
                          >
                            {education.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

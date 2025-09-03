// module/Education.jsx
const Education = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
      
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Computer Science</h3>
          <p className="text-gray-600">University of Technology</p>
          <p className="text-sm text-gray-500 mt-2">2020 - 2024</p>
          <p className="text-gray-700 mt-3">Bachelor's Degree in Computer Science with focus on web development and software engineering.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Web Development Bootcamp</h3>
          <p className="text-gray-600">Coding Academy</p>
          <p className="text-sm text-gray-500 mt-2">2019 - 2020</p>
          <p className="text-gray-700 mt-3">Intensive full-stack web development program covering modern technologies.</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
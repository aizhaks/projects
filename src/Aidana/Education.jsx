import React, { useState, useMemo } from "react";

const courses = [
  {
    id: 1,
    title: "Ағылшын тілі (Beginner)",
    mode: "Онлайн",
    city: "Барлық қалалар",
    category: "Тіл курсы",
    price: "Тегін",
    link: "https://t.me/english_course_free",
  },
  {
    id: 2,
    title: "Web-бағдарламалау негіздері",
    mode: "Онлайн",
    city: "Барлық қалалар",
    category: "IT",
    price: "10 000 ₸ / ай",
    link: "https://t.me/webdev_course",
  },
  {
    id: 3,
    title: "ҰБТ-ға дайындық (математика)",
    mode: "Оффлайн",
    city: "Шымкент",
    category: "Дайындық",
    price: "15 000 ₸ / ай",
    link: "https://t.me/unt_math_shymkent",
  },
  {
    id: 4,
    title: "Python бағдарламалау курсы",
    mode: "Онлайн",
    city: "Барлық қалалар",
    category: "IT",
    price: "20 000 ₸ / ай",
    link: "https://t.me/python_course",
  },
  {
    id: 6,
    title: "Excel және кестелік есептер",
    mode: "Онлайн",
    city: "Барлық қалалар",
    category: "Дайындық",
    price: "12 000 ₸ / ай",
    link: "https://t.me/excel_course",
  },
  {
    id: 7,
    title: "Дизайн негіздері (Figma)",
    mode: "Онлайн",
    city: "Барлық қалалар",
    category: "IT",
    price: "18 000 ₸ / ай",
    link: "https://t.me/design_course",
  },
];

function Education() {
  const [selectedMode, setSelectedMode] = useState("Барлығы");
  const [selectedCategory, setSelectedCategory] = useState("Барлығы");
  const [searchText, setSearchText] = useState("");
  const [completedCourses, setCompletedCourses] = useState([]);

  const modes = useMemo(() => ["Барлығы", ...new Set(courses.map((c) => c.mode))], []);
  const categories = useMemo(() => ["Барлығы", ...new Set(courses.map((c) => c.category))], []);

  const toggleCompleted = (courseId) => {
    setCompletedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const modeMatch = selectedMode === "Барлығы" || course.mode === selectedMode;
      const catMatch = selectedCategory === "Барлығы" || course.category === selectedCategory;
      const searchMatch = course.title.toLowerCase().includes(searchText.toLowerCase());
      return modeMatch && catMatch && searchMatch;
    });
  }, [selectedMode, selectedCategory, searchText]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-6">Оқу курстары</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Курс атын іздеу..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full md:max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <select
          className="border border-gray-300 rounded px-3 py-2 w-full md:max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={selectedMode}
          onChange={(e) => setSelectedMode(e.target.value)}
        >
          {modes.map((mode, idx) => (
            <option key={idx} value={mode}>
              {mode}
            </option>
          ))}
        </select>

        <select
          className="border border-gray-300 rounded px-3 py-2 w-full md:max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-5">
          {filteredCourses.map((course) => {
            const isCompleted = completedCourses.includes(course.id);
            return (
              <div
                key={course.id}
                className={`bg-white shadow rounded p-4 flex flex-col justify-between hover:shadow-md transition relative ${
                  isCompleted ? "border-green-500 border-2 bg-green-50" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className={`text-xl font-semibold ${
                      isCompleted ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600">Өтілді</label>
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={() => toggleCompleted(course.id)}
                      className="w-4 h-4"
                    />
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-1">📚 {course.category}</p>
                <p className="text-gray-600 text-sm mb-1">💻 {course.mode}</p>
                <p className="text-blue-600 font-bold mb-3 text-base">💰 {course.price}</p>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-center text-sm font-medium"
                >
                  Курсты көру
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="mt-6 text-gray-500 text-center">Сүзгіге сай курс табылмады.</p>
      )}

    </div>
  );
}

export default Education;

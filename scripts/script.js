// ///////////////////////////////////////////////////////////////////////////
// HAMBURGER MENU
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// ///////////////////////////////////////////////////////////////////////////
// CURRENT YEAR
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `© <span class="highlight">${today.getFullYear()}</span>`;

// /////////////////////////////////////////////////////////////////////////////
// LAST UPDATE
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // La hora '0' debe ser '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + ampm;
  return strTime;
}

function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1; // Los meses van de 0 a 11
  let year = date.getFullYear();
  return `${month}/${day}/${year} ${formatAMPM(date)}`;
}

let now = new Date();
let formattedDate = formatDate(now);
document.getElementById("lastModified").textContent = formattedDate;

// ///////////////////////////////////////////////////////////////////////
// COURSES CONTENT
const coursesData = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

function renderCourses(_coursesData) {
  const courses = document.getElementById("courses");
  const totalCredits = document.getElementById("total-credits");
  const coursesHtml = _coursesData
    .map((course) => {
      if (course.completed == true) {
        return `<li class="label bg-secondary">${course.subject} ${course.number}</li>`;
      } else {
        return `<li class="label">${course.subject} ${course.number}</li>`;
      }
    })
    .join("");

  courses.innerHTML = coursesHtml;

  const totalCreditsRequired = _coursesData.reduce((total, course) => total + course.credits, 0);
  totalCredits.innerHTML = totalCreditsRequired;

}

renderCourses(coursesData);

// /////////////////////////////////////////////////////////////////////////////
// FILTER COURSES
const filterContainer = document.getElementById("filters");

// map the buttons
filterContainer.addEventListener("click", (event) => {
  if (event.target.id === "filters") {
    return;
  }

  if (event.target.id === "filter-all") {
    console.log("all");
    renderCourses(coursesData);
  }

  if (event.target.id === "filter-cse") {
    const filterCse = coursesData.filter((course)=>{
      return course.subject === "CSE";
    })
    renderCourses(filterCse);
  }

  if (event.target.id === "filter-wdd") {
    const filterWdd = coursesData.filter((course)=>{
      return course.subject === "WDD";
    })
    renderCourses(filterWdd);
  }
});


import "./Services.css";

const services = [
  {
    icon: "🔍",
    title: "Manual QA Testing",
    items: [
      "Functional Testing",
      "Exploratory Testing",
      "Regression Testing",
      "Bug Reports",
    ],
  },
  {
    icon: "⚙️",
    title: "Automation Testing",
    items: [
      "Selenium WebDriver",
      "Java + TestNG",
      "Cucumber BDD",
      "Framework Design",
    ],
  },
  {
    icon: "☁️",
    title: "API Testing",
    items: [
      "REST Assured",
      "Postman",
      "Schema Validation",
      "Negative API Testing",
    ],
  },
  {
    icon: "📱",
    title: "Mobile Testing",
    items: [
      "Android Testing",
      "iOS Testing",
      "Responsive Web Testing",
      "Real Device Validation",
    ],
  },
  {
    icon: "⚛️",
    title: "React Frontend Development",
    items: [
      "React + Vite Development",
      "Portfolio Websites",
      "Landing Pages",
      "Business Websites",
      "Prototype Web & Mobile Applications",
    ],
  },
  {
    icon: "📄",
    title: "QA Documentation",
    items: [
      "Test Plans",
      "Test Cases",
      "Bug Summary Reports",
      "QA Status Reports",
    ],
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="services-title">Services I Offer</h2>

        <p className="services-subtitle">
          Clear, practical QA and frontend services for clients who need better
          product quality, faster testing, and clean web presentation.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <ul>
                {service.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
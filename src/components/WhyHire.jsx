import "./WhyHire.css";

const highlights = [
  { value: "10.5+", label: "Years QA Experience" },
  { value: "100%", label: "Upwork Job Success" },
  { value: "3", label: "5-Star Reviews" },
  { value: "18+", label: "GitHub Projects" },
  { value: "60%", label: "Regression Time Reduction" },
  { value: "80%", label: "Automation Coverage Growth" },
  { value: "React", label: "Responsive Web + Mobile Apps" },

];

function WhyHire() {
  return (
    <section className="why-hire-section" id="why-hire">
      <div className="container">
        <h2 className="why-hire-title">Why Hire Me?</h2>

        <p className="why-hire-subtitle">
          I help clients improve product quality through practical QA, scalable automation,
          clear bug reporting, and clean frontend prototype delivery.
        </p>

        <div className="why-hire-grid">
          {highlights.map((item) => (
            <div className="why-hire-card" key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyHire;
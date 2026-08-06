import "./Testimonials.css";

import review1 from "../assets/reviews/review1.png";
import review2 from "../assets/reviews/review2.png";
import review3 from "../assets/reviews/review3.png";

const reviews = [
  {
    title: "Manual QA Testing",
    client: "Upwork Client",
    rating: "★★★★★",
    short:
      "Smart & easy to work with. Very good at manual testing.",
    image: review1,
  },
  {
    title: "Automation Framework",
    client: "Upwork Client",
    rating: "★★★★★",
    short:
      "Built a scalable Selenium automation framework from scratch.",
    image: review2,
  },
  {
    title: "QA Delivery",
    client: "Upwork Client",
    rating: "★★★★★",
    short:
      "Delivered excellent work before the deadline.",
    image: review3,
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">

      <div className="container">

        <h2 className="testimonials-title">
          ⭐ Client Feedback
        </h2>

        <div className="testimonial-grid">

          {reviews.map((review, index) => (

            <a
              href={review.image}
              target="_blank"
              rel="noreferrer"
              className="testimonial-card"
              key={index}
            >

              <div className="stars">
                {review.rating}
              </div>

              <h3>{review.title}</h3>

              <h4>{review.client}</h4>

              <p>{review.short}</p>

              <button>
                View Full Review
              </button>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
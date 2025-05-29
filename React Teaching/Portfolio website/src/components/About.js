import React, { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => setShowMore(prev => !prev);

  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>I am a frontend developer who loves building interactive UIs.</p>
      {showMore && (
        <p>
          I also enjoy backend development, designing databases, and working on
          full-stack apps. I am currently exploring Next.js and TypeScript.
        </p>
      )}
      <button className="show-more-btn" onClick={toggleMore}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}

export default About;
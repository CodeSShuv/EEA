import React from 'react';
import Card from './Card';  // Importing the Card component
import './Secard.css';     // Importing section-specific CSS

const Section = ({ arr = 0 }) => {
  return (
    <section className="card-section">
      {arr === 1 ? (
        <>
          <Card
            title="Expert/Native Instructors"
            description="Learn from experienced teachers who are dedicated to your success and passionate about helping you achieve your goals."
          />
          <Card
            title="Interactive Learning"
            description="Engage in dynamic lessons that incorporate speaking, listening, reading, and writing exercises, making learning enjoyable and effective."
          />
          <Card
            title="Flexible Scheduling"
            description="Choose a package that fits your lifestyle and learning pace, allowing you to balance your studies with other commitments."
          />
          <Card
            title="Supportive Community"
            description="Join a network of learners who share your goals and aspirations, providing encouragement and motivation throughout your journey."
          />
        </>
      ) : (
        <>
        
          <Card
            title="4-Week Package"
            description="Perfect for beginners! Learn essential grammar, vocabulary, and basic conversation skills in an intensive 4-week course."
          />
          <Card
            title="3-Month Package"
            description="Deepen your understanding of English. Focus on grammar, vocabulary, and conversation skills for everyday situations with interactive lessons."
          />
          <Card
            title="6-Month Package"
            description=" Take your English to the next level. Build fluency and comprehension with real-world conversations and professional language skills."
          />
          <Card
            title="1 Year Package"
            description="Master English in a year! Cover advanced topics, specialized vocabulary, and gain personalized feedback to become a confident speaker."
          />
          <Card
            title="2 Year Package"
            description="Achieve full fluency with a comprehensive 2-year course that covers all aspects of the language for professional and personal success."
          />
        </>
      )}
    </section>
  );
}

export default Section;

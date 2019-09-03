import React from 'react';
import Calendar from '../components/scheduler/Calendar';

export default () => {
  return (
    <>
      <section>
        <h2>About</h2>
        <p>
          My name is Steven Scaffidi. I'm a full-time UI developer for a
          financial tech company. I have a degree in Mathematics from Louisiana
          State University, and a Masters in Business Adminstration from Tulane
          University. I didn't start programming until my mid 20s; however, I
          quickly fell in love with JavaScript. JavaScript is the most popular
          programming language today, and the growth in job opportunities is a
          reflection of the tremendous investments made yearly by various
          fortune 500 companies. If your dream is to learn the language, get a
          job, or master a framework, I can help!
        </p>
      </section>
      <section className="serviceSection">
        <h2>Services</h2>
        <div className="services">
          <div className="service">
            <h3>JavaScript</h3>
            <p>
              Google, Microsoft, Facebook, AirBnB and countless other companies
              have made it clear that JavaScript is here to stay. An investment
              in learning JavaScript can mean great job opportunities for the
              foreseeable future. I've been working with JavaScript full-time
              for 5 years. I've taught a variety of classes in JavaScript from
              basic constructs to advance UI frameworks like React. The great
              part about JavaScript is you can use to do almost anything (this
              also happens to be one of the tricky and seemly overwhelming
              things about the language). I can help you get started, get
              better, or help you develop expertise in your area of interest.
            </p>
          </div>
          <div className="service">
            <h3>JavaScript Ecosystem</h3>
            <p>
              The JavaScript ecosystem is huge and growing everyday. Navigating
              all of the tools and frameworks available can be exhausting.
              Choosing the tools to get started on a project can seem
              impossible. I can give you my experience with frameworks like
              React, NextJS, Gatsby, Apollo, MeteorJS, ReasonML, and others. I
              can give you a good starting place for most projects that help you
              start focusing on developing projects rather than choosing tools.
              I can also help you get a good setup on your computer that can
              help significantly boost your productivity.
            </p>
          </div>
          <div className="service">
            <h3>React & React Native</h3>
            <p>
              Released by Facebook in 2013, React has quickly become the goto
              front-end framework of the internet. Huge sites like facebook.com,
              walmart.com, and airbnb.com use React to run their websites. React
              is easy to use and can quickly produce small projects but is also
              flexible enough for robust enterprise applications. I work with
              React everyday, and I can show you how to master the framework to
              produce your own web-based or mobile applications.
            </p>
          </div>
          <div className="service">
            <h3>Mentorship & Career Advice</h3>
            <p>
              Do want to have a career working in software development? Do you
              want to switch industries? Do you want to work from home? I've
              worked in a variety of industries that had nothing to do with
              software development including insurance, manufacturing, and
              non-profits. I was successfully able to change careers, and I can
              help you learn the dos and don't that can help you get there.
            </p>
          </div>
        </div>
      </section>
      <Calendar />
      <style jsx>{`
        section {
          margin: 0 auto;
          max-width: 700px;
          font-size: 16px;
          padding: 0 10px;
        }
        .serviceSection {
          max-width: 840px;
        }
        h2 {
          text-align: center;
          font-size: 24px;
        }
        p {
          line-height: 1.8;
        }
        .services {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        .service {
          border-radius: 2px;
          padding: 10px;
          border: 1px solid #ccc;
          max-width: 400px;
          margin-left: 5px;
          margin-right: 5px;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  );
};

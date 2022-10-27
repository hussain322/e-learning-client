import React from "react";
import Slider from "react-slick";

const Faq = () => {
  return (
    <div className="mt-20 w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-8 font-bold">
        Course Advisement!!!
      </h1>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-xl font-medium">
          Who should take an Online Course?
        </div>
        <div className="collapse-content">
          <p>
            Students join our online courses for a variety of reasons and come
            from diverse backgrounds, professions, and age groups. With online
            courses, you can Advance your skill-set or begin a career change.
            Take the next step in your formal education. Ease the transition
            before entering a full-time academic program. Enjoy learning a new
            topic. Whatever the reason, our online courses are a flexible way of
            learning about the art world without disrupting your daily life.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-6"
      >
        <div className="collapse-title text-xl font-medium">
          How do I select a course?
        </div>
        <div className="collapse-content">
          <p>
            Visit the course catalog to browse our offerings. In addition to
            searching by course duration and availability, you can also search
            by subject to ensure you find a course that reflects your interests.
            Though it is not required, we encourage those who have not studied
            art before to consider taking an art history course first to get a
            solid grounding in the discipline before exploring more specific
            disciplines. Our art history courses are the perfect first step
            before moving on to art market courses.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-6"
      >
        <div className="collapse-title text-xl font-medium">
          Can I take more than one course at a time?
        </div>
        <div className="collapse-content">
          <p>
            If you are new to online learning, we recommend that you begin with
            one course. As our courses are offered frequently throughout the
            year, you can always come back and continue your studies with one or
            more topics.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-6"
      >
        <div className="collapse-title text-xl font-medium">
          I am a high school student, can I join?
        </div>
        <div className="collapse-content">
          <p>
            Courses are open to all students 18 years or older. If you are under
            18 years old, please contact us
          </p>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Faq;

import React from "react";
import styles from "@/styles/Home.module.css";

const HomePage = () => {
  const jobs = [
    {
      date: "Feb 2002 - Present",
      company: "Insightt",
      companyLink: "https://insightt.io",
      title: "Full-Stack Javascript Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus velit commodi sapiente. Non accusamus mollitia debitis laboriosam enim, voluptates eaque quam reiciendis tempora facere maxime molestiae quia sapiente omnis inventore!",
    },
  ];

  const sections = [
    {
      title: "Contact",
      items: [
        {
          name: "Phone",
          value: "+57 3135472537",
        },
        {
          name: "Email",
          value: "morenoricardo237@gmail.com",
        },
        {
          name: "Address",
          value: "Santa Marta, Colombia",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          name: "System engineering",
          value: "2015 - 2019 at Dr. Jose Gregorio Hernandez, Venezuela",
        },
      ],
    },
    {
      title: "Language",
      items: [
        {
          name: "Spanish",
          value: "Native",
        },
        {
          name: "English",
          value: "Intermediate / B2",
        },
      ],
    },
    {
      title: "Libraries & Frameworks",
      items: [
        {
          name: "React.js",
          value: "More than 5 years of experience",
        },
        {
          name: "Node.js",
          value: "More than 5 years of experience",
        },
        {
          name: "React Native",
          value: "More than 3 years of experience",
        },
        {
          name: "Flask & Django (Python)",
          value: "1 year of experience",
        },
        {
          name: "Backbone.js",
          value: "1 year of experience",
        },
        {
          name: "GraphQL",
          value: "1 year of experience",
        },

        {
          name: "Wordpress, OctoberCMS & Laraval (PHP)",
          value: "2 year of experience",
        },
      ],
    },
  ];

  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeLeft}>
        <div className={styles.ImageContainer}>
          <img
            className={styles.Image}
            src="https://dtv0n64gnvy8v.cloudfront.net/39e7ed72-3b15-11eb-bac4-98460a8fcda2.jpg"
          />
        </div>
        {sections.map((section, sectionKey) => (
          <div className={styles.Section} key={sectionKey}>
            <h2 className={styles.TitleUnderlineWhite}>{section.title}</h2>
            {section.items.map((item, itemKey) => (
              <div className={styles.SectionItem} key={itemKey}>
                <p className={styles.ProfileTextWhiteBold}>{item.name}</p>
                <p className={styles.ProfileTextWhite}>{item.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.HomeRight}>
        <h1 className={styles.Name}>Ricardo Moreno</h1>
        <p className={styles.Description}>Full-Stack JavaScript Developer</p>
        <div>
          <h2 className={styles.TitleUnderline}>Profile</h2>
          <p className={styles.ProfileText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus velit commodi sapiente. Non accusamus mollitia
            debitis laboriosam enim, voluptates eaque quam reiciendis tempora
            facere maxime molestiae quia sapiente omnis inventore!
          </p>
        </div>
        <div>
          <h2 className={styles.TitleUnderline}>Experience</h2>
          <div>
            {jobs.map((job, jobKey) => (
              <div className={styles.Job} key={jobKey}>
                <div className={styles.JobLeft}>
                  <p className={styles.JobDate}>{job.date}</p>
                  <p className={styles.JobDate}>{job.company}</p>
                  <a
                    className={styles.JobDate}
                    href={job.companyLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {job.companyLink}
                  </a>
                </div>
                <div className={styles.JobRight}>
                  <h3 className={styles.JobTitle}>{job.title}</h3>
                  <p className={styles.JobDesc}>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

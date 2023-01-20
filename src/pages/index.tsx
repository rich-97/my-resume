import React from "react";
import styles from "@/styles/Home.module.css";

const HomePage = () => {
  const jobs = [
    {
      date: "Feb 2022 - Present",
      company: "Insightt",
      companyLink: "https://insightt.io",
      title: "Full-Stack Javascript Developer",
      description:
        "Insightt is a car repossession  company on the USA. Here I worked with JavaScript using React.js for the Front-End, for Back-End Node.js and mobile apps with React Native.",
    },
    {
      date: "Feb 2021 - Feb 2022",
      company: "Tipzty",
      companyLink: "https://tipzty.com",
      title: "CTO and Full-Stack Software Developer",
      description:
        "Tipzty offer to ecommerce various services for improve their sales trought live and video shopping, also have a Personal Shopper service online. Here I worked with JavaScript using React.js for the Front-End, for Back-End GoLang & Node.js and mobile apps with Flutter & React Native. Also I worked as CTO during 3 months making decisions on the area of development.",
    },
    {
      date: "Ene 2020 - Ene 2021",
      company: "Cobuildlab",
      companyLink: "https://cobuildlab.com",
      title: "Full-Stack JavaScript Developer",
      description:
        "Cobuildlab is a software development company, here I worked with JavaScript React.js, Node.js, React Native, 8base and GraphQL. Here I worked in a lot of projects like okroo.com, jobcore.co and menafesting.com.",
    },
    {
      date: "Sept 2019 - Dic 2019",
      company: "Picap",
      companyLink: "https://picap.co",
      title: "Front-End Developer",
      description:
        "Picap is an app like Uber in LATAM but using motorcycles and cars, here I worked with React.js on the Front-End side. I was in charge of develop an administrative panel for the company without using templates.",
    },
    {
      date: "Jun 2019 - Sept 2019",
      company: "Aerolab",
      companyLink: "https://aerolab.co/expertise",
      title: "React Native Mobile Developer",
      description:
        "Aerolab is also a software development agency, here I worked with React Native as mobile developer. I contributed to finish an app for www.personal.com.ar.",
    },
    {
      date: "Mar 2017 - Jun 2019",
      company: "Cmantikweb",
      companyLink: "https://cmantikweb.com",
      title: "Full-Stack Web Developer",
      description:
        "Working with Cmantikweb was my first job as a Full-Stack Developer at an Agency of Software, here I worked with React.js, Backbone.js, PHP5+ with Laravel, MySQL, OctoberCMS, Node.js and more.",
    },
    {
      date: "Jan 2017 - Mar 2017",
      company: "Valery",
      companyLink: "https://valery.com",
      title: "Back-End Developer",
      description:
        "Developing microservices using Node.js for Valery products on the web and desktop apps. Valery has various products to manage and improve the efficiency of each kind of business.",
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
            I am a software developer specialized in web and mobile applications
            with more than 5 years of experience in different Frameworks. As a
            professional I am in charge of the analysis, design and
            implementation of components, architectures and systems in the area
            of software development. My experience has taught me to choose
            wisely the resources and tools to create an applicable, scalable and
            efficient software solution.
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

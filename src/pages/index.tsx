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

  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeLeft}>
        <div className={styles.ImageContainer}>
          <img
            className={styles.Image}
            src="https://dtv0n64gnvy8v.cloudfront.net/39e7ed72-3b15-11eb-bac4-98460a8fcda2.jpg"
          />
        </div>
        <div>
          <h2 className={styles.TitleUnderlineWhite}>Contact</h2>
          <p className={styles.ProfileTextWhite}>Phone</p>
          <p className={styles.ProfileTextWhite}>+57 3135472537</p>
          <br />
          <p className={styles.ProfileTextWhite}>Email</p>
          <p className={styles.ProfileTextWhite}>morenoricardo237@gmail.com</p>
          <br />
          <p className={styles.ProfileTextWhite}>Address</p>
          <p className={styles.ProfileTextWhite}>Santa Marta, Colombia</p>
        </div>
        <br />
        <div>
          <h2 className={styles.TitleUnderlineWhite}>Education</h2>
          <p className={styles.ProfileTextWhite}>2015 - 2019</p>
          <p className={styles.ProfileTextWhite}>System engineering</p>
          <p className={styles.ProfileTextWhite}>Dr. Jose Gregorio Hernandez</p>
        </div>
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

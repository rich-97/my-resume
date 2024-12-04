import React, { FC } from "react";
import styles from "@/styles/Home.module.css";
import fsPromises from "fs/promises";
import path from "path";
import { PersonalData } from "@/shared/types";

type Props = {
  data: PersonalData;
};

const HomePage: FC<Props> = ({ data }) => {
  const sections = [
    {
      title: "Contact",
      items: [
        {
          name: "Phone",
          value: data.phone,
        },
        {
          name: "Email",
          value: data.email,
        },
        {
          name: "Address",
          value: data.address,
        },
      ],
    },
    ...data.sections,
  ];

  return (
    <div className={styles.HomeContainer}>
      <div className={styles.HomeLeft}>
        <div className={styles.ImageContainer}>
          <img className={styles.Image} src={data.avatar} />
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
        <h1 className={styles.Name}>{data.full_name}</h1>
        <p className={styles.Description}>{data.profession}</p>
        <div>
          <h2 className={styles.TitleUnderline}>Profile</h2>
          <p className={styles.ProfileText}>{data.description}</p>
        </div>
        <div>
          <h2 className={styles.TitleUnderline}>Experience</h2>
          <div>
            {data.jobs.map((job, jobKey) => (
              <div className={styles.Job} key={jobKey}>
                <div className={styles.JobLeft}>
                  <p className={styles.JobDate}>{job.date}</p>
                  <p className={styles.JobDate}>{job.company}</p>
                  <a
                    className={styles.JobDate}
                    href={`https://${job.companyLink}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {job.companyLink}
                  </a>
                </div>
                <div className={styles.JobRight}>
                  <h3 className={styles.JobTitle}>{job.title}</h3>
                  <p className={styles.JobDesc}>{job.description}</p>
                  {job.achievements && (
                    <>
                      <p className={styles.JobAchievementTitle}>Achievements</p>
                      <ul>
                        {job.achievements.map(
                          (achievement, achievementIndex) => (
                            <li key={achievementIndex}>
                              <p className={styles.JobAchievement}>
                                {achievement}
                              </p>
                            </li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  return {
    props: {
      data: objectData,
    },
  };
}

export default HomePage;

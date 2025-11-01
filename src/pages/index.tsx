import React, { FC } from "react";
import styles from "@/styles/Home.module.css";
import fsPromises from "fs/promises";
import path from "path";
import { PersonalData } from "@/shared/types";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";

type Props = {
  data: PersonalData;
  lang: string;
};

const translations = {
  en: {
    contact: "Contact",
    phone: "Phone",
    email: "Email",
    address: "Address",
    profile: "Profile",
    experience: "Experience",
    achievements: "Achievements",
  },
  es: {
    contact: "Contacto",
    phone: "Teléfono",
    email: "Correo",
    address: "Dirección",
    profile: "Perfil",
    experience: "Experiencia",
    achievements: "Logros",
  },
};

const HomePage: FC<Props> = ({ data, lang }) => {
  const t = translations[lang as keyof typeof translations] || translations.en;

  const sections = [
    {
      title: t.contact,
      items: [
        {
          name: t.phone,
          value: data.phone,
        },
        {
          name: t.email,
          value: data.email,
        },
        {
          name: t.address,
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
        <p className={styles.Skills}>
          {data.skills.map((skill) => skill).join(", ")}
        </p>
        <div className={styles.SocialLinks}>
          {data.social_links.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
              {link.icon === "github" ? <GithubIcon /> : null}
              {link.icon === "linkedin" ? <LinkedInIcon /> : null}
            </a>
          ))}
        </div>
        <div>
          <h2 className={styles.TitleUnderline}>{t.profile}</h2>
          <p className={styles.ProfileText}>{data.description}</p>
        </div>
        <div>
          <h2 className={styles.TitleUnderline}>{t.experience}</h2>
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
                      <p className={styles.JobAchievementTitle}>{t.achievements}</p>
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

export async function getServerSideProps(context: any) {
  const lang = context.query.lang || "en";
  const fileName = lang === "es" ? "data.es.json" : "data.json";
  const filePath = path.join(process.cwd(), `src/data/${fileName}`);
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  return {
    props: {
      data: objectData,
      lang,
    },
  };
}

export default HomePage;

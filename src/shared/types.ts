export type PersonalData = {
  social_links: {
    name: string;
    url: string;
    icon: React.ReactNode;
  }[];
  skills: string[];
  full_name: string;
  email: string;
  avatar: string;
  phone: string;
  address: string;
  description: string;
  profession: string;
  jobs: {
    date: string;
    company: string;
    companyLink: string;
    title: string;
    description: string;
    achievements: string[];
  }[];
  sections: {
    title: string;
    items: {
      name: string;
      value: string;
    }[];
  }[];
};

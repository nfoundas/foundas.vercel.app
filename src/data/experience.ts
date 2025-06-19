import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "January 2022 — Present",
    title: "Development of a ReactJs application for drawing and modifying roofs on 2D Canvases",
    company: "Novatec Consulting GmbH / CGI",
    companyUrl: "https://www.cgi.com/en",
    description:
      "Using OpenLayers, my team and I have developed an application that is used to create interactive drawings in the area of building planning. I created complex algorithms for the automatic calculation of domain-specific functionalities and used current design standards to keep the web application accessible to the users. In addition to the professional and technical requirements review and the mentoring of less experienced colleagues, I took on the role of Product Owner for a period of 6 months and thus dedicated myself to the creation of requirements and project organization.",
    technologies: [
      "Construction Sector",
        "ReactJS",
        "TypeScript",
        "OpenLayers",
        "MaterialUI",
        "Vitest",
        "Jest",
        "Playwright",
        "Azure DevOps",
        "SpringBoot",
        "Kotlin",
        "Postgresql"
    ],
    logo: "/logos/cgi.webp",
  },
  {
    dates: "February 2021 — December 2021",
    title: "Angular application for document processing",
    company: "Novatec Consulting GmbH",
    companyUrl: "https://www.novatec-gmbh.de",
    description:
      "In the role of front-end lead, I was responsible for the development of a new Angular application. I was responsible for the architecture of the new app, as well as customizing the design according to customer requirements, connecting REST APIs and carrying out functional and technical tests to ensure the quality of the requirements.",
    technologies: ["Construction Sector", "Angular", "TypeScript", "Jest", "GitLab", "Jenkins"],
    logo: "/logos/novatec.webp",
  },
  {
    dates: "October 2018 — January 2021",
    title: "Angular application for contract management and visualization of vehicle data",
    company: "Novatec Consulting GmbH",
    companyUrl: "https://www.novatec-gmbh.de",
    description:
      "Planning and implementation of migrations and new developments. Development of several Angular applications with TypeScript and REST APIs with Kotlin and Java (Spring Boot). Implementation of functional and technical tests for quality assurance.",
    technologies: ["Automotive Sector", "Angular", "TypeScript", "Jest", "SpringBoot", "Kotlin", "Java", "GitLab", "Jenkins", "Grafana"],
    logo: "/logos/novatec.webp",
  },
  {
    dates: "October 2015 — September 2018",
    title: "Bachelor Applied Computer Science",
    company: "DHBW Stuttgart / Novatec Consulting GmbH",
    companyUrl: "https://www.dhbw-stuttgart.de/",
    description:
      "Practical bachelor degree program with a strong focus on software development and practical work in the company",
    technologies: [],
    logo: "/logos/dhbw.webp",
  },
];

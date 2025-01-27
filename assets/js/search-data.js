// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-photography",
              title: "photography",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "news-early-career-award-2022-schizophrenia-international-research-society",
          title: 'Early Career Award - 2022 Schizophrenia International Research Society.',
          description: "",
          section: "News",},{id: "news-poster-finalist-for-the-abstract-titled-improved-individualized-identification-of-schizophrenia-and-clinical-high-risk-for-psychosis-when-combining-cognition-with-natural-language-processing-at-the-schizophrenia-international-research-society-congress",
          title: 'Poster Finalist for the abstract titled, Improved individualized identification of schizophrenia and clinical...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-presented-my-work-on-the-clinical-utility-of-combining-linguistic-features-with-cognition-across-the-psychosis-spectrum-at-the-computational-psychiatry-course-in-new-york",
          title: 'Presented my work on the clinical utility of combining linguistic features with cognition...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-give-a-guest-talk-at-columbia-university-on-my-work-linking-the-reliability-of-processing-naturalistic-auditory-information-with-language-and-thought-disorder-across-the-psychosis-spectrum-thank-you-gaurav-patel-for-the-invitation-and-insightful-discussions",
          title: 'I was invited to give a guest talk at Columbia University on my...',
          description: "",
          section: "News",},{id: "news-invited-to-give-three-guest-lectures-for-master-39-s-level-course-on-quot-introduction-to-multivariate-and-neuroimaging-methods-quot",
          title: 'Invited to give three guest lectures for Master&amp;#39;s-level course on &amp;quot;Introduction to multivariate...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-travel-award-2023-society-of-biological-psychiatry",
          title: 'Travel Award - 2023 Society of Biological Psychiatry.',
          description: "",
          section: "News",},{id: "news-it-was-a-pleasure-presenting-recent-work-from-two-projects-at-the-international-conference-on-early-intervention-in-mental-health-in-lausanne",
          title: 'It was a pleasure presenting recent work from two projects at the International...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8/";
            },},{id: "news-i-am-excited-to-announce-that-i-have-been-selected-to-participate-in-the-2024-career-development-institute-for-psychiatry-cdi-further-details-about-this-exciting-two-year-career-enhacement-opportunity-for-early-stage-clinical-scientists-are-available-here",
          title: 'I am excited to announce that I have been selected to participate in...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%61%6C%61%69%6C%61.%68%61%61%73@%6D%73%73%6D.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shalailahaas", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shalailahaas", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-1385-1050", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Shalaila-Haas/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=AREhBXYAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://centilebrain.org/#/", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.translational-neuro.org/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

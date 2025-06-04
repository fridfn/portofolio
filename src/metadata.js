import badge from "/badge.png"
import avatar from "@/assets/profile_pict.jpg"
import flag_indonesia from "@/assets/flag/indonesia.svg"
import flag_usa from "@/assets/flag/united-states.svg"
import nodejs from "@/assets/logo/nodejs.webp"
import mysql from "@/assets/logo/mysql.webp"
import php from "@/assets/logo/php8.webp"
import mongodb from "@/assets/logo/mongodb.webp"
import git from "@/assets/logo/git.webp"
import css from "@/assets/logo/css.webp"
import html from "@/assets/logo/html.webp"
import javascript from "@/assets/logo/javascript.webp"
import react from "@/assets/logo/react.webp"
import tailwind from "@/assets/logo/tailwind.webp"
import nayla from "@/assets/logo/nayla.webp"
import fridfn from "@/assets/logo/fridfn.jpg"
import dede from "@/assets/logo/dede.webp"
import peter from "@/assets/logo/peter.webp"
import yapin from "@/assets/logo/yapin.jpg"
import sdn from "@/assets/logo/sdn.jpg"
import alhuda from "@/assets/logo/alhuda.jpg"

const metadata = {
 personal: {
  interests: [
   {
    icons: 'logo-chrome',
    title: 'Developing Website',
    description: 'I really like to develop a website from scratch to become a beautiful website.'
   },
   {
    icons: 'musical-notes',
    title: 'Hearing Music',
    description: 'Listening to music is what I like while studying and in every activity I do.'
   },
   {
    icons: 'images',
    title: 'Design & Typhography',
    description: 'enjoy creating attractive and unique website designs from scratch'
   },
   {
    icons: 'game-controller',
    title: 'Gaming & Streaming',
    description: 'really like playing games and watching movies to fill my free time'
   },
   {
    icons: 'create',
    title: 'Writing & Typing',
    description: 'Writing and typing is my favorite thing to do in a book or in phone'
   },
   {
    icons: 'people',
    title: 'Hangout & Friends',
    description: 'Hangout with friends is another healing for me, cause you can talk alot'
   },
   {
    icons: 'mic',
    title: 'Singing & Karoke',
    description: "I really like singing when the song is my favorite songs, it's very fun"
   },
   {
    icons: 'person',
    title: 'Being Alone',
    description: 'Being alone is my favorite place, I can suddenly disappear for whole time'
   },
  ],
  reviews: [
   {
    client: "Nayla",
    avatar: "nayla",
    from: "Students at SMK Bina Prestasi",
    comment: "Farid helped me turn a Figma design into a fully functional website for a school project. His attention to detail and guidance made the process smooth and really improved the final result."
   },
   {
    client: "Dede",
    avatar: "dede",
    from: "Students at SMK Yapin Bekasi",
    comment: "As someone new to web development, working with Farid was a great learning experience. He explained concepts clearly and always encouraged me to keep learning and experimenting."
   },
   {
    client: "Peter",
    avatar: "peter",
    from: "Frontend Freelancer",
    comment: "Farid was a fantastic teammate. He’s proactive, skilled, and always willing to support the team. Collaborating with him made our work more efficient and enjoyable."
   },
  ],
  language: [
   {
    language: "Indonesia",
    image: flag_indonesia,
    info: "-- Native",
    description: "et enim eiusmod occaecat minim aute mollit commodo sunt laboris et irure nisi id",
   },
   {
    language: "English",
    image: flag_usa,
    info: "-- Intermediate",
    description: "et enim eiusmod occaecat minim aute mollit commodo sunt laboris et irure nisi id",
   },
   {
    language: "Malaysia",
    image: flag_usa,
    info: "-- Intermediate",
    description: "et enim eiusmod occaecat minim aute mollit commodo sunt laboris et irure nisi id",
   },
  ],
  portofolio: [
   {
    name: "Reminder App's",
    image: "mysql",
    type: "Web Apps",
    year: "Oct 2022",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://exfavorite-website-development.vercel.app/"],
    stack: ["javascript", "Sass", "React"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Fandom V-Tuber",
    image: "mysql",
    type: "Web Apps",
    year: "Oct 2022",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://exfandom.vercel.app/"],
    stack: ["javascript", "Css", "HTML5"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Youtube Website",
    image: "mysql",
    type: "E-Comerce",
    year: "Oct 2022",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://exyoutube.vercel.app/"],
    stack: ["PHP", "Css", "HTML5", "MySQL"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Fabot App's",
    image: "mysql",
    type: "Design",
    year: "Oct 2022",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://fabot-apps.vercel.app/"],
    stack: ["Css", "HTML5"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Birthday Gift",
    image: "mysql",
    year: "Oct 2022",
    type: "Information",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://asyla.vercel.app/"],
    stack: ["React", "Sass", "Css", "HTML5"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
  ],
  experience: [
   {
    title: "Elementary School Students at SDN Jatimulya",
    from: "SDN Jatimulya 01",
    date: {
     ins: "July 2013",
     out: "July 2019"
    },
    achievement: [
     "SD OSIS Member",
     "Rangking 6 in class 6th",
     "Diligent students / Most active",
    ],
    description: {
     one: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do ut labore ea quis laborum excepteur exercitation elit aliquip sit",
     sec: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do incididunt qui incididunt magna consequat labore ex ut exercitation qui",
    },
   },
   {
    title: "Elementary School Students at SDN Jatimulya",
    from: "SDN Jatimulya 01",
    date: {
     ins: "July 2013",
     out: "July 2019"
    },
    achievement: [
     "SD OSIS Member",
     "Rangking 6 in class 6th",
     "Diligent students / Most active",
    ],
    description: {
     one: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do ut labore ea quis laborum excepteur exercitation elit aliquip sit",
     sec: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do incididunt qui incididunt magna consequat labore ex ut exercitation qui",
    },
   },
   {
    title: "Elementary School Students at SDN Jatimulya",
    from: "SDN Jatimulya 01",
    date: {
     ins: "July 2013",
     out: "July 2019"
    },
    achievement: [
     "SD OSIS Member",
     "Rangking 6 in class 6th",
     "Diligent students / Most active",
    ],
    description: {
     one: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do ut labore ea quis laborum excepteur exercitation elit aliquip sit",
     sec: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do incididunt qui incididunt magna consequat labore ex ut exercitation qui",
    },
   },
   {
    title: "Coming Soon"
   }
  ],
  education: [
   {
    title: "Elementary School Students at SDN Jatimulya",
    logo: "sdn",
    from: "SDN Jatimulya 01",
    date: {
     ins: "July 2013",
     out: "July 2019"
    },
    achievement: [
     "SD OSIS Member",
     "Rangking 6 in class 6th",
     "Diligent students / Most active",
    ],
    description: {
     one: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do ut labore ea quis laborum excepteur exercitation elit aliquip sit",
     sec: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do incididunt qui incididunt magna consequat labore ex ut exercitation qui",
    },
   },
   {
    title: "Middle School at SMP Islam Al Huda",
    logo: "alhuda",
    from: "SMP Islam Al - Huda",
    date: {
     ins: "July 2019",
     out: "July 2022"
    },
    achievement: [
     "SD OSIS Member",
     "Rangking 6 in class 6th",
     "Diligent students / Most active",
    ],
    description: {
     one: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do ut labore ea quis laborum excepteur exercitation elit aliquip sit",
     sec: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do incididunt qui incididunt magna consequat labore ex ut exercitation qui",
    },
   },
   {
    title: "Vocational High School at SMK Yapin Bekasi",
    logo: "yapin",
    from: "SMK Yapin Bekasi",
    date: {
     ins: "July 2022",
     out: "July 2025"
    },
    achievement: [
     "SD OSIS Member",
     "Rangking 6 in class 6th",
     "Diligent students / Most active",
    ],
    description: {
     one: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do ut labore ea quis laborum excepteur exercitation elit aliquip sit",
     sec: "minim ipsum voluptate commodo qui pariatur commodo pariatur culpa do incididunt qui incididunt magna consequat labore ex ut exercitation qui",
    },
   },
   {
    title: "Coming Soon"
   }
  ],
  facts: [
   {
    name: "Working And Development ",
    highlight: "Use Mobile Device",
    icons: "time",
    type: "Web Apps",
    stack: ["javascript", "Sass", "React"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Fabot Apps",
    icons: "time",
    type: "Web Apps",
    highlight: "Use Mobile Device",
    stack: ["javascript", "Css", "HTML5"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Clothing Shop",
    icons: "time",
    type: "E-Comerce",
    highlight: "Use Mobile Device",
    stack: ["PHP", "Css", "HTML5", "MySQL"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Shorts Web",
    icons: "time",
    type: "Design",
    stack: ["Css", "HTML5"],
    highlight: "Use Mobile Device",
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Ensiklopedia Dinosaurs",
    icons: "time",
    type: "Information",
    highlight: "Use Mobile Device",
    stack: ["React", "Sass", "Css", "HTML5"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
  ],
  updates: [
   {
    total: 25,
    icons: "albums",
    description: "Website Published"
   },
   {
    total: 3,
    icons: "chatbubbles",
    description: "Leanguages Speak"
   },
   {
    total: 290506,
    icons: "eye",
    description: "Public Visitors"
   },
  ],
  socials: [
   {
    name: "Phone",
    icons: "call",
    link: "https://api.whatsapp.com/send?phone=628995247491&text=Halo%2C%20Salam%20kenal%20farid%20:)",
    description: "+62 899 5247 491"
   },
   {
    name: "E-Mail",
    icons: "mail",
    link: "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C",
    description: "faridfathonin@gmail.com"
   },
   {
    name: "LinkedIn",
    icons: "logo-linkedin",
    link: "https://www.linkedin.com/in/farid-fathoni-n-26a48b2b3",
    description: "Farid Fathoni N"
   },
   {
    name: "Facebook",
    icons: "logo-facebook",
    link: "https://www.facebook.com/fridfn",
    description: "Rid"
   },
   {
    name: "Instagram",
    icons: "logo-instagram",
    link: "https://www.instagram.com/fridfn_?igsh=MWswdmZ1MXM1bWhqYQ==",
    description: "@fridfn_"
   },
  ],
  skills: {
   backend: [
    {
     tech: "NodeJs",
     image: nodejs,
     percent: 95,
     experience: "2+ years experience",
    },
    {
     tech: "MySQL",
     image: mysql,
     percent: 70,
     experience: "1+ years experience",
    },
    {
     tech: "PHP",
     image: php,
     percent: 75,
     experience: "1+ years experience",
    },
    {
     tech: "mongoDB",
     image: mongodb,
     percent: 85,
     experience: "1+ years experience",
    },
    {
     tech: "Git",
     image: git,
     percent: 80,
     experience: "3+ years experience",
    },
   ],
   frontend: [
    {
     tech: "HTML",
     image: html,
     percent: 98,
     experience: "3+ years experience",
    },
    {
     tech: "CSS",
     image: css,
     percent: 94,
     experience: "3+ years experience",
    },
    {
     tech: "Javascript",
     image: javascript,
     percent: 73,
     experience: "2+ years experience",
    },
    {
     tech: "React",
     image: react,
     percent: 60,
     experience: "1+ years experience",
    },
    {
     tech: "Tailwind",
     image: tailwind,
     percent: 47,
     experience: "2+ month experience",
    },
   ],
   other: [
    {
     tech: "Problem Solving",
     image: react,
     percent: 87,
     experience: "3+ years experience",
    },
    {
     tech: "Critical Thinking",
     image: react,
     percent: 85,
     experience: "3+ years experience",
    },
    {
     tech: "Communication skills",
     image: react,
     percent: 90,
     experience: "2+ years experience",
    },
    {
     tech: "Team collaboration",
     image: react,
     percent: 88,
     experience: "1+ years experience",
    },
    {
     tech: "Project management",
     image: react,
     percent: 97,
     experience: "2+ month experience",
    },
   ]
  },
  banner: {
   profesional: [
    {
     title: {
      one: "Database",
      sec: "Management"
     },
     icons: "logo-buffer",
     description: "I can handle your data effectively and ensure it is secure"
    },
    {
     title: {
      one: "Website",
      sec: "Design"
     },
     icons: "images",
     description: "I can bring your best design ideas to life with precision and creativity"
    },
    {
     title: {
      one: "Project",
      sec: "Management"
     },
     icons: "people",
     description: "I can lead teams to deliver successful projects on time"
    },
    {
     title: {
      one: "Critical",
      sec: "Thingking"
     },
     icons: "bulb",
     description: "I can able to analyze problems and provide logical solutions"
    },
    {
     title: {
      one: "Team",
      sec: "Collaboration"
     },
     icons: "people",
     description: "I can collaborate well in a team by actively contributing and listening to others"
    }
   ]
  }
 },
 images: {
  avatar: avatar,
  usa: flag_usa,
  indonesia: flag_indonesia,
  ayuu: badge,
  farid: badge,
  nabilla: badge,
  nodejs: nodejs,
  mysql: mysql,
  php: php,
  mongodb: mongodb,
  git: git,
  nayla: nayla,
  fridfn: fridfn,
  dede: dede,
  peter: peter,
  sdn: sdn,
  yapin: yapin,
  alhuda: alhuda,
 }
}

export default metadata;
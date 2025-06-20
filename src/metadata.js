import badge from "/badge.png"
import avatar from "@/assets/logo/profile_pict.jpg"
import flag_indonesia from "@/assets/flag/indonesian.png"
import flag_usa from "@/assets/flag/united-states.svg"
import flag_malay from "@/assets/flag/malaysia.png"
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
import stevan from "@/assets/logo/stevan.png"
import chatgpt from "@/assets/logo/chatgpt.png"
import yapin from "@/assets/logo/yapin.jpg"
import sdn from "@/assets/logo/sdn.jpg"
import alhuda from "@/assets/logo/alhuda.jpg"
import learning from "@/assets/logo/learning.jpeg"
import os from "@/assets/logo/os.jpeg"
import project from "@/assets/logo/project.jpeg"
import server from "@/assets/logo/server.jpeg"
import mbti_assertive from "@/assets/mbti/16personalities_trait_assertive.svg"
import mbti_feeling from "@/assets/mbti/16personalities_trait_feeling.svg"
import mbti_introverted from "@/assets/mbti/16personalities_trait_introverted.svg"
import mbti_intuitive from "@/assets/mbti/16personalities_trait_intuitive.svg"
import mbti_judging from "@/assets/mbti/16personalities_trait_judging.svg"
import mbti_infj from "@/assets/mbti/infj-advocate-male.svg"
import mbti_diplomat from "@/assets/mbti/role-diplomat.svg"
import mbti_strategy from "@/assets/mbti/strategy-confident-individualism-diplomat.svg"
import mbti from "@/assets/mbti/strategy-confident-individualism-diplomat.svg"

const metadata = {
 personal: {
  about: {
   title: {
    highlight: "A little bit",
    normal: "about me"
   },
   description: "I’m a Frontend Developer with <b>over a decade</b> of experience, specializing in <strong>Frontend Development</strong> with some backend work as well. I also have hands-on experience with HTML5, CSS3, JavaScript, and NodeJs in production environments.<br></br>This diverse background gives me the flexibility to adapt to a wide range of project needs.<br></br>I look forward to collaborating <b>WITH YOU!</b>"
  },
  mbti: {
   about: [
    {
     title: {
      sub: "personality",
      main: "Advocate (INFJ - A)"
     },
     image: "mbti_infj",
     description: "Advocates are quiet visionaries, often serving as inspiring and tireless idealists. These rare types are open-minded and imaginative, applying care and creativity."
    },
    {
     title: {
      sub: "About Role",
      main: "Diplomats"
     },
     image: "mbti_diplomat",
     description: "Advocates are quiet visionaries, often serving as inspiring and tireless idealists. These rare types are open-minded and imaginative, applying care and creativity."
    },
    {
     title: {
      sub: "Strategy",
      main: "Confident Individualism"
     },
     image: "mbti_strategy",
     description: "Advocates are quiet visionaries, often serving as inspiring and tireless idealists. These rare types are open-minded and imaginative, applying care and creativity."
    },
   ],
   personality: [
    {
     value: 75,
     type: "Energy",
     title: "Introverted",
     untype: "Extraverted",
     color: "rgb(31,113,170)"
    },
    {
     value: 62,
     type: "Mind",
     title: "Intuitive",
     untype: "Observant",
     color: "rgb(170,105,31)"
    },
    {
     value: 58,
     type: "Nature",
     title: "Feeling",
     untype: "Thinking",
     color: "rgb(31,170,36)"
    },
    {
     value: 74,
     type: "Tactics",
     title: "Judging",
     untype: "Prospecting",
     color: "rgb(31,170,145)"
    },
    {
     value: 65,
     type: "Identity",
     untype: "Turbulent",
     title: "Assertive",
     color: "rgb(170,59,31)"
    },
   ],
   category: [
    {
     name: "INFJ",
     avatar: "mbti_infj",
     tags: ["Introverted", "Intuitive"],
     comment: "deskripsi menarik tentang mbti tersebut"
    },
   ]
  },
  personality: {
   title: {
    highlight: "Personal",
    normal: "MBTI"
   },
   description: "I’m a Frontend Developer with <b>over a decade</b> of experience, specializing in <strong>Frontend Development</strong> with some backend work as well. I also have hands-on experience with HTML5, CSS3, JavaScript, and NodeJs in production environments.<br></br>This diverse background gives me the flexibility to adapt to a wide range of project needs.<br></br>I look forward to collaborating <b>WITH YOU!</b>"
  },
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
    name: "Nayla",
    avatar: "nayla",
    from: "Students at SMK Bina Prestasi",
    comment: "Farid helped me turn a Figma design into a fully functional website for a school project. His attention to detail and guidance made the process smooth and really improved the final result."
   },
   {
    name: "Dede",
    avatar: "dede",
    from: "Students at SMK Yapin Bekasi",
    comment: "As someone new to web development, working with Farid was a great learning experience. He explained concepts clearly and always encouraged me to keep learning and experimenting."
   },
   {
    name: "Stevan",
    avatar: "stevan",
    from: "Frontend Freelancer",
    comment: "Farid was a fantastic teammate. He’s proactive, skilled, and always willing to support the team. Collaborating with him made our work more efficient and enjoyable."
   },
   {
    name: "ChatGPT",
    avatar: "chatgpt",
    from: "Artificial Intelligence",
    comment: "Farid was a fantastic teammate. He’s proactive, skilled, and always willing to support the team. Collaborating with him made our work more efficient and enjoyable."
   },
  ],
  language: [
   {
    language: "Indonesia",
    image: flag_indonesia,
    info: "-- Native",
    description: "excellent communication and writing skills.",
   },
   {
    language: "English",
    image: flag_usa,
    info: "-- Intermediate",
    description: "Intermediate proficiency in English language; can hold conversations and understand written text.",
   },
   {
    language: "Malaysia",
    image: flag_malay,
    info: "-- Intermediate",
    description: "excellent communication and writing skills.",
   },
  ],
  portofolio: [
   {
    name: "First Website",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxNYgocFdlvBifw1M27yKmTAl314mDNpAjQ&usqp=CAU",
    type: "First Development",
    year: "Oct 2022",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn/exfavorite-website-development", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://exfavorite-website-development.vercel.app/"],
    stack: ["javascript", "Sass", "React"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Reminder App's",
    image: "https://raw.githubusercontent.com/fridfn/reminder-apps/refs/heads/main/public/apple-touch-icon.png",
    type: "Web Apps",
    year: "Oct 2022",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn/reminder-apps", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://exfavorite-website-development.vercel.app/"],
    stack: ["javascript", "Sass", "React"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Clothing's Shop",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gJa9hCkklQZcXGT70904-sW-CdRf9VwsAOcwfJbDpx5AkCIiBQECh-HA&s=10",
    type: "E-Commerce",
    year: "Oct 2022",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn/reminder-apps", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://exfavorite-website-development.vercel.app/"],
    stack: ["PHP", "CSS","JAVASCRIPT", "MySQL"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Fandom V-Tuber",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROk-YZJ75_8endELNdT1toEm4_5_EeB0lLaIi7UeIbifxx-yUuQz7rlKo&s=10",
    type: "Web Apps",
    year: "Oct 2022",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn/Ex-Fandom", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://exfandom.vercel.app/"],
    stack: ["javascript", "Css", "HTML5"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Youtube Website",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBHz7bbmm8AXaev7gYox4Gd5v4qZbnwQAbqwRNz7Wyg&s",
    type: "E-Comerce",
    year: "Oct 2022",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn/exyoutube", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://exyoutube.vercel.app/"],
    stack: ["Css", "HTML5"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Fabot App's",
    image: "https://raw.githubusercontent.com/fridfn/FabotApps/refs/heads/main/assets/icon/boticon.webp",
    type: "Design",
    year: "Oct 2022",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn/FabotApps", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://fabot-apps.vercel.app/"],
    stack: ["Css", "HTML5", "javascript", "API"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
   {
    name: "Birthday Gift",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYuQFWnwldB8VOU9Cg8kNpj5KdA1Rt-cJKroT-9RQMIOMUKN7oaTOol9q&s=10",
    year: "Oct 2022",
    type: "Information",
    icons: ["logo-github", "mail", "link"],
    photo: [avatar, avatar, avatar, avatar],
    link: ["https://github.com/fridfn/project-birthday-wishes", "mailto:faridfathonin@gmail.com?subject=Hi%20Farid!&body=Halo%20farid%20%3E%5C%5C%3C", "https://asyla.vercel.app/"],
    stack: ["Css", "HTML5"],
    description: "velit cillum dolor irure qui ullamco ex cupidatat culpa incididunt dolore mollit voluptate qui sit pariatur culpa sit nulla duis"
   },
  ],
  awards: [
   {
    id: 1,
    title: {
     one: "The Self-Taught",
     sec: "Samurai"
    },
    icons: {
     main: "logo-octocat",
     secon: "logo-tableau",
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "For the spirit of learning without a formal teacher. You explore the world of coding with only determination and curiosity."
   },
   {
    id: 2,
    title: {
     one: "Code Alchemist",
     sec: "Award"
    },
    icons: {
     main: "logo-octocat",
     secon: "logo-tableau",
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "Because you can turn ideas into real projects. Even using unusual environments, such as proot and UserLand OS."
   },
   {
    id: 2,
    title: {
     one: "The",
     sec: "Problem Solver"
    },
    icons: {
     main: "logo-octocat",
     secon: "logo-tableau",
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "From tinkering with servers to finding solutions to strange problems in Termux—you never give up and always find a way out."
   },
   {
    id: 2,
    title: {
     one: "React Rocket",
     sec: "Award 🚀"
    },
    icons: {
     main: "logo-octocat",
     secon: "logo-tableau",
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "Because you learn and use React, Particles.js, and router seriously. Not all beginners dare to dive that far."
   },
   {
    id: 2,
    title: {
     one: "The Curious",
     sec: "Tinkerer"
    },
    icons: {
     main: "logo-octocat",
     secon: "logo-tableau",
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "For your courage to explore many tools and concepts (Supabase, Podman, Docker, Wings) just to understand how it all works."
   },
   {
    id: 2,
    title: {
     one: "The",
     sec: "Grit Coder"
    },
    icons: {
     main: "logo-octocat",
     secon: "logo-tableau",
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "For your courage, consistency and determination to face challenges, even in limited technical environments."
   },
  ],
  awards_id: [
   {
    id: 1,
    title: {
     one: "The Self-Taught",
     sec: "Samurai"
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "Untuk semangat belajar tanpa guru formal. Kamu menjelajahi dunia coding hanya dengan tekad dan rasa penasaran."
   },
   {
    id: 2,
    title: {
     one: "Code Alchemist",
     sec: "Award"
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "Karena kamu bisa menyulap ide jadi proyek nyata. Bahkan pakai lingkungan yang tidak biasa, seperti proot dan UserLand OS."
   },
   {
    id: 2,
    title: {
     one: "The",
     sec: "Problem Solver"
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "Dari ngoprek server sampai nemu solusi buat kendala aneh di Termux—kamu pantang menyerah dan selalu cari jalan keluar."
   },
   {
    id: 2,
    title: {
     one: "React Rocket",
     sec: "Award 🚀"
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "Karena kamu belajar dan pakai React, Particles.js, dan router dengan serius. Nggak semua pemula berani terjun sejauh itu."
   },
   {
    id: 2,
    title: {
     one: "The Curious",
     sec: "Tinkerer"
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "Untuk keberanian kamu ngulik banyak tools dan konsep (Supabase, Podman, Docker, Wings) hanya demi memahami bagaimana semuanya bekerja."
   },
   {
    id: 2,
    title: {
     one: "The",
     sec: "Grit Coder"
    },
    link: "https://chatgpt.com/share/684cdbd9-fdc0-8012-b941-70df14c5aaa2",
    description: "Untuk keberanian, konsistensi, dan keteguhan kamu menghadapi tantangan, bahkan di lingkungan teknis yang terbatas."
   },
  ],
  coding_impact: [
   {
    title: {
     one: "10,000+ Lines of Code Written",
     sec: ""
    },
    icons: "ribbon",
    type: ["Code", "WritingLogic"],
    description: "From basic HTML to React and PHP, I've written thousands of lines of code in personal projects, UI experiments, and paid assignments."
   },
   {
    title: {
     one: "6+ Personal Projects Completed",
     sec: ""
    },
    icons: "construct",
    type: ["PersonalProject", "Finished"],
    description: "Build a variety of projects from scratch—including a dinosaur encyclopedia, a portfolio website, and a Figma-designed UI to real code."
   },
   {
    title: {
     one: "3 Front-End Technologies Learned",
     sec: ""
    },
    icons: "image",
    type: ["Frontend", "Learning"],
    description: "From pure CSS, JavaScript frameworks (React), to animations like Particles.js—I learned everything and put it into practice right away."
   },
   {
    title: {
     one: "Coding on 2 Operating Systems Proot",
     sec: ""
    },
    icons: "mail",
    type: ["Termux", "Linux"],
    description: "Running Ubuntu and Debian on Termux to build server-side panels and learn to manage development environments with device limitations."
   },
   {
    title: {
     one: "Running Hosting Panel on Android",
     sec: ""
    },
    icons: "layers",
    type: ["Server", "Panel"],
    description: "Trying out Pterodactyl Panel on Termux and Wings on Gitpod—technical experiments that pushed me to understand infrastructure & Docker."
   },
   {
    title: {
     one: "500+ Hours of Self-Study",
     sec: ""
    },
    icons: "ribbon",
    image: "mysql",
    type: ["Autodidact", "Consistency"],
    description: "Without formal guidance outside of school, I compiled notes, built from mistakes, and developed a consistent pattern of self-study."
   },
   {
    title: {
     one: "Always Learn from Errors",
     sec: ""
    },
    icons: "medical",
    type: ["Debugging", "ProblemSolver"],
    description: "Every error is a teacher. I got used to reading stack traces, finding solutions, and understanding the root cause—not just copying the answers."
   },
  ],
  coding_impact_id: [
   {
    title: {
     one: "10.000+ Baris Kode Ditulis",
     sec: ""
    },
    icons: "mail",
    image: "mysql",
    type: ["Code", "WritingLogic"],
    description: "Dari HTML dasar sampai React dan PHP, aku telah menulis ribuan baris kode dalam proyek pribadi, eksperimen UI, dan tugas berbayar."
   },
   {
    title: {
     one: "6+ Proyek Pribadi Terselesaikan",
     sec: ""
    },
    icons: "mail",
    image: "mysql",
    type: ["PersonalProject", "Finished"],
    description: "Membangun berbagai proyek dari nol—termasuk ensiklopedia dinosaurus, website portofolio, dan UI hasil desain Figma ke kode nyata"
   },
   {
    title: {
     one: "3 Teknologi Front-End Dipelajari",
     sec: ""
    },
    icons: "mail",
    image: "mysql",
    type: ["Frontend", "Learning"],
    description: "Mulai dari CSS murni, framework JavaScript (React), hingga animasi seperti Particles.js—semua kupelajari dan langsung kupraktikkan."
   },
   {
    title: {
     one: "Coding di 2 Sistem Operasi Proot",
     sec: ""
    },
    icons: "mail",
    image: "mysql",
    type: ["Termux", "Linux"],
    description: "Menjalankan Ubuntu & Debian di Termux untuk membangun server-side panel dan belajar mengelola lingkungan pengembangan dengan keterbatasan perangkat."
   },
   {
    title: {
      one: "Menjalankan Panel Hosting di Android",
     sec: ""
    },
    icons: "mail",
    image: "mysql",
    type: ["Server", "Panel"],
    description: "Mencoba menjalankan Pterodactyl Panel di Termux dan Wings di Gitpod—eksperimen teknikal yang mendorongku untuk memahami infrastruktur & Docker."
   },
   {
    title: {
     one: "500+ Jam Belajar Otodidak",
     sec: ""
    },
    icons: "mail",
    image: "mysql",
    type: ["Autodidact", "Consistency"],
    description: "Tanpa bimbingan formal di luar sekolah, aku menyusun catatan, membangun dari kesalahan, dan mengembangkan pola belajar mandiri yang konsisten."
   },
   {
    title: {
     one: "Selalu Belajar dari Error",
     sec: ""
    },
    icons: "mail",
    image: "mysql",
    type: ["Debugging", "ProblemSolver"],
    description: "Setiap error adalah guru. Aku terbiasa membaca stack trace, mencari solusi, dan mengerti akar masalah—bukan hanya menyalin jawaban."
   },
  ],
  experience: [
   {
    title: "Self-Taught Journey Begins",
    from: "SDN Jatimulya 01",
    date: {
     ins: "October 2022",
     out: "Until Now"
    },
    achievement: [
     "HTML",
     "CSS",
     "JAVASCRIPT",
    ],
    logo: "learning",
    description: {
     one: "I started my journey of learning in the world of programming autodidactically. Starting from curiosity about how websites work",
     sec: "I began to dive into the world of HTML, CSS, and JavaScript through documentation, YouTube videos from youtuber Dea Afrizal ✨",
    },
    quote: "Aku nggak tahu harus mulai dari mana, tapi aku tahu harus terus mulai.",
   },
   {
    title: "Tinkering from a Limited Environment",
    from: "SDN Jatimulya 01",
    date: {
     ins: "July 2023",
     out: "Until Now"
    },
    achievement: [
     "Termux",
     "Podman",
     "Userland",
     "Ubuntu (proot)",
    ],
    logo: "os",
    description: {
     one: "Due to device limitations, I learned to run a Linux environment using Termux and proot. From there I learned a lot about operating systems, package management, and small implementations through Podman.",
     sec: "There were many challenges, but it made me understand more about the breadth of understanding the world of coding itself.",
    },
    quote: "Bukan alatnya yang membatasi, tapi niatnya.",
   },
   {
    title: "Project Panel Game Server – Pterodactyl",
    from: "SDN Jatimulya 01",
    date: {
     ins: "December 2024",
     out: "Febuary 2025"
    },
    achievement: [
     "Pterodactyl Panel",
     "Wings",
     "Docker",
     "Gitpod",
    ],
    logo: "server",
    description: {
     one: "I challenged myself to build a game server using Pterodactyl Panel. Since Termux doesn’t support Docker, I learned to separate environments: run the panel in Termux, and Wings in another place like Gitpod.",
     sec: "This experience made me more familiar with real-world deployment, networking, and debugging.",
    },
    quote: "Satu error, seribu pelajaran."
   },
   {
    title: "First Steps in Front-End – React & Particles",
    from: "SDN Jatimulya 01",
    date: {
     ins: "December 2024",
     out: "Until Now"
    },
    achievement: [
     "React",
     "Vite",
     "ParticlesJs",
    ],
    logo: "react",
    description: {
     one: "This year was the starting point for me to learn React for the first time. Although I was new to the world of React, I immediately dared to use more complex tools such as Particles.js to beautify the appearance.",
     sec: "In this phase, I focused on understanding the basics of React such as components, props, and state, while also trying to make the appearance more attractive with particle animations.",
    },
    quote: "Meskipun baru mulai, aku nggak takut buat mencoba hal yang terlihat rumit."
   },
   {
    title: "First Project – Website from Figma Design",
    from: "SDN Jatimulya 01",
    date: {
     ins: "May 2024",
     out: "May 2024"
    },
    achievement: [
     "PHP",
     "CSS",
     "MySQL",
     "JAVASCRIPT",
    ],
    logo: "project",
    description: {
     one: "The year 2024 was a significant moment because I got my first project from outside—working on a website based on a given Figma design. Although this project was a school assignment from another institution (assignment jockey)",
     sec: "This is where I first worked on someone else's request, completing a project from scratch, and getting paid for my hard work. I developed the website using PHP for the backend logic, MySQL as the database, and CSS for the appearance.",
    },
    quote: "Pengalaman pertama ini membuka pintu ke dunia nyata: bahwa skill yang kupelajari bisa benar-benar bermanfaat dan dihargai."
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
     "Rangking 3 in class 6th",
     "Diligent students / Most active",
    ],
    description: {
     one: "I started my elementary education at SDN Jatimulya 01, where I not only focused on academics, but also actively participated in school organization activities as a member of OSIS.",
     sec: "In my final year, I managed to rank 6th in class and was known as one of the diligent and active students in various school activities. During this time, I began to form discipline and a passion for learning that became a strong foundation for my next journey.",
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
     "Rangking 4 in class 9th",
     "ambitious students",
    ],
    description: {
     one: "Continuing to the middle school level, I attended Al-Huda Islamic Junior High School. Here I maintained consistency both academically and actively in school. I was involved in student organizations again and continued to maintain my achievements as a diligent student.",
     sec: "This period was the starting point of my interest in the world of computers and technology, which later became my serious interest in the following years.",
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
     "ambitious students",
     "Diligent students / Most active",
    ],
    description: {
     one: "Currently, I am studying at SMK Yapin Bekasi, majoring in Computer and Network Engineering. This is where I started to learn the basics of programming more systematically, including web-based application development. Although formal learning is very helpful.",
     sec: "I am also actively developing myself independently outside the curriculum—looking for additional references, building personal projects, and trying new technologies. SMK is where I realized that the world of web development is a field that I want to pursue seriously.",
    },
   },
   {
    title: "Looking For Job or Become a Freelancer"
   }
  ],
  facts: [
   {
    title: {
     one: "100%",
     sec: "Autodidact"
    },
    description: "I learned to code without any paid courses—all through experimentation, error, and a constant curiosity that pushed me to understand more deeply."
   },
   {
    title: {
     one: "Start Coding",
     sec: "When Life is Hard"
    },
    description: "I started this journey in a difficult time, when I had to postpone school due to the economic situation. From that point on I found new passion and hope through the world of programming."
   },
   {
    title: {
     one: 'Likes to “Tweak”',
     sec: "Technology"
    },
    description: "Termux, Linux, Podman, Pterodactyl server panels—I love trying out technical things that aren't necessarily taught in school."
   },
   {
    title: {
     one: "Ever Got Paid",
     sec: "from a Coding Project"
    },
    description: "The year 2024 was the starting point when I was trusted to complete a project from someone else, and the result: I was paid for the first time because of my coding skills."
   },
   {
    title: {
     one: "Every Error",
     sec: "is a Learning Opportunity"
    },
    description: "For me, errors are not something to be ashamed of—they are the best teachers. I am used to digging into stack traces and finding solutions, not just copying and pasting answers."
   },
   {
    title: {
     one: 'Have Many “Practice”',
     sec: "Projects"
    },
    description: "Even small projects—like a portfolio page, a dinosaur encyclopedia, or an animation experiment—become a real and fun way for me to learn."
   },
   {
    title: {
     one: 'Still Learning,',
     sec: "But Never Stop"
    },
    description: "I don't feel like an expert yet, but one thing is for sure: I will not stop learning. Coding has become a part of my life."
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
   {
    total: 270 + "+",
    icons: "logo-github",
    description: "Git Contributions"
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
     link: "https://github.com/fridfn",
     icons: "logo-buffer",
     description: "I can handle your data effectively and ensure it is secure"
    },
    {
     title: {
      one: "Website",
      sec: "Design"
     },
     icons: "images",
     link: "https://github.com/fridfn",
     description: "I can bring your best design ideas to life with precision and creativity"
    },
    {
     title: {
      one: "Project",
      sec: "Management"
     },
     icons: "people",
     link: "https://github.com/fridfn",
     description: "I can lead teams to deliver successful projects on time"
    },
    {
     title: {
      one: "Critical",
      sec: "Thingking"
     },
     icons: "logo-slack",
     link: "https://github.com/fridfn",
     description: "I can able to analyze problems and provide logical solutions"
    },
    {
     title: {
      one: "Team",
      sec: "Collaboration"
     },
     icons: "people",
     link: "https://github.com/fridfn",
     description: "I can collaborate well in a team by actively contributing and listening to others"
    }
   ]
  }
 },
 images: {
  avatar: avatar,
  usa: flag_usa,
  malay: flag_malay,
  indonesia: flag_indonesia,
  ayuu: badge,
  farid: badge,
  chatgpt: chatgpt,
  nabilla: badge,
  nodejs: nodejs,
  mysql: mysql,
  php: php,
  mongodb: mongodb,
  git: git,
  nayla: nayla,
  fridfn: fridfn,
  dede: dede,
  stevan: stevan,
  sdn: sdn,
  yapin: yapin,
  alhuda: alhuda,
  learning: learning,
  os: os,
  react: react,
  server: server,
  project: project,
  mbti: mbti,
  mbti_infj: mbti_infj,
  mbti_diplomat: mbti_diplomat,
  mbti_strategy: mbti_strategy,
  mbti_assertive: mbti_assertive,
  mbti_judging: mbti_judging,
  mbti_intuitive: mbti_intuitive,
  mbti_introverted: mbti_introverted,
  mbti_feeling: mbti_feeling,
 }
}

export default metadata;
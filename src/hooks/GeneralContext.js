import { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
  useEffect(function () {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const [navOpen, setNavOpen] = useState(false);
  const projects = [
    {
      img:"https://i.postimg.cc/W34LSx0w/sidama-youth-screenshot.png",
      name:"Sidama Youth Council",
      details:[
        "Sidama Youth Council's website was built with React as a frontend and PHP as the backend.",
        'I was fully responsible in the designing, building and  deployment of the website.'
      ],
      link:"https://www.sidamayouthcouncil.com"
    },
    {
      img: "https://i.postimg.cc/8zyqct2F/keab-screenshot.png",
      name: "KEAB Africa",
      details: [
        "KEAB Africa Community Development and Human Rights Organization (KACDHRO) is a prominent civil society organization located in Hawassa, Ethiopia.",
        "This website was designed and deployed by me. I used React JS for the frontend and Nodejs (Express) for the backend.",
      ],
      link: " https://www.keabafrica.com"
    },
    {
      img: "https://i.postimg.cc/hjJgcHhP/hale-screenshot.png",
      name: "HALE:Human Rights and Inclusion",
      details: [
        "HALE: Human Rights and Inclusion Network (H-HRIN) is a non-governmental, non-partisan organization dedicated to advancing human rights and fostering inclusion.",
        "I designed and the developed the site using React JS for the frontend and Nodejs (Express) for the backend.",
      ],
      link: "https://www.humanrightsinclusion.org",
    },

    {
      img: "https://i.postimg.cc/hvPNtyLv/writewave-screenshot.png",
      name: "WriteWave",
      details: [
        "WriteWave is a blog site that allows users to write, read, and comment on blog posts.",
        "I developed the site using React JS for the frontend and Nodejs (Express) for the backend. I also used MongoDB for the database",
      ],
      link: "https://writewave.netlify.app",
    },
    {
      img: "https://i.postimg.cc/2SBMyBZQ/cinemagic-screenshot.png",
      name: "Cinemagic",
      details: [
        "Cinemagic is a movie ticket booking website where u can easily book tickets for your favorite movies.",
        "This site is purely frontend and made using react.",
      ],
      link: "https://cinemagic-et.netlify.app",
      
    },
    {
      img: "https://i.postimg.cc/yN7jMGfy/Screenshot-20250418-203938-Abyssinia-Academy.jpg",
      name: "Abyssinia Academy",
      details: [
        "Abysinnia Academy is a mobile app that takes any pdf that it is provided with and can create flashcards, quizzes, and also helps you be able to discuss about the content that you provided.",
        "The app is made with React Native for the frontend and Nodejs (Express) for the backend"
      ],
      link:"https://github.com/Yishak110402/abyssinia-academy"
    }
  ];

  return (
    <GeneralContext.Provider
      value={{
        projects,
        navOpen,
        setNavOpen,
      }}>
      {children}
    </GeneralContext.Provider>
  );
}

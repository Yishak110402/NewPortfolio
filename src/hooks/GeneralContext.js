import { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
  useEffect(function () {
    window.scrollTo({
      top: 0
    })
  },[])
  const [navOpen, setNavOpen] = useState(false);
  const projects = [
    {
      img: "https://i.postimg.cc/Y2Y4GWt9/HALE-Screenshot.png",
      name: "HALE:Human Rights and Inclusion",
      details: [
        "HALE: Human Rights and Inclusion Network (H-HRIN) is a non-governmental, non-partisan organization dedicated to advancing human rights and fostering inclusion.",
        "I designed and the developed the site using React JS for the frontend and Nodejs (Express) for the backend.",
      ],
      link: "https://www.humanrightsinclusion.org"
    },

    {
      img:"https://i.postimg.cc/ZRJQ8N1S/Screenshot-2024-09-15-190248.png",
      name: "WriteWave",
      details:[
        "WriteWave is a blog site that allows users to write, read, and comment on blog posts.",
        "I developed the site using React JS for the frontend and Nodejs (Express) for the backend. I also used MongoDB for the database"
      ],
      link: "https://writewave.netlify.app"
    },
    {
      img:"https://i.postimg.cc/PJ9KRvFN/Screenshot-2024-09-15-191212.png",
      name:"Cinemagic",
      details:[
        "Cinemagic is a movie ticket booking website where u can easily book tickets for your favorite movies.",
        "This site is purely frontend and made using react."
      ],
      link:"https://cinemagic-et.netlify.app"
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

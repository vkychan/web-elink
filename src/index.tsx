// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App, { HomePage } from "./App"; 
import "antd/dist/reset.css";
import "./tailwind.css";
import "./i18n";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import AboutUs from "./page/about-us/AboutUs";
import ContactUs from "./page/contact-us/ContactUs"; 
import PageNotFound from "./page/page-not-found/PageNotFound";
import SteamEducation from "./page/steam-education/SteamEducation";
import Services from "./page/services/Services";
import JEBDLAcademicJournalPage from "./page/jebdl-academic-journal/JEBDLAcademicJournal";
import SchoolCarousel from "./page/school-carousel/SchoolCarousel";
import CollaborativeResearchPage from "./page/collaborative-research/CollaborativeResearch";
import ConferencesAndForumsPage from "./page/conferences-and-forums/ConferencesAndForums";
import FutureScientistTrainingCoursePage from "./page/future-scientist-training-course/FutureScientistTrainingCourse";
import SteamCourse from "./page/steam-course/SteamCourse";
import AstronomerExperienceProgramPage from "./page/astronomer-experience-program/AstronomerExperienceProgram";
import InnovativeTechTour from "./page/innovative-tech-tours/InnovativeTechTours";
import CollaborativeProjectPage from "./page/collaborative-project/CollaborativeProject";
import GraduateCollaborationPage from "./page/graduate-collaboration/GraduateCollaboration";
import SteamEducationPhilosophy from "./page/steam-education-philosophy/SteamEducationPhilosophy";
import DemoGen from "./page/demo-gen-question/DemoGen";
import CareerPage from "./page/career/career";
import GamePlayer from "./page/game-center/GamePlayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "aboutus",
        children: [
          {
            index: true,
            element: <AboutUs />,
          },
          {
            path: "jebdl-academic-journal",
            element: <JEBDLAcademicJournalPage />, 
          },
          {
            path: "collaborative-research",
            element: <CollaborativeResearchPage />, 
          },
          {
            path: "conferences-and-forums",
            element: <ConferencesAndForumsPage />, 
          }
        ],
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "career",
        element: <CareerPage />,
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <Services />,
          },
          {
            path: "collaborative-projects",
            element: <CollaborativeProjectPage />,
          },
          {
            path: "graduate-collaboration",
            element: <GraduateCollaborationPage />,
          },
          {
            path: "steam-education",
            children: [
              {
                index: true,
                element: <SteamEducation />,
              },
              {
                path: "game-center",
                element: <GamePlayer />,
              },
              {
                path: "future-scientist",
                element: <FutureScientistTrainingCoursePage />, 
              },
              {
                path: "astronomer-experience-program",
                element: <AstronomerExperienceProgramPage />, 
              },
              {
                path: "innovative-tech-tours",
                element: <InnovativeTechTour />, 
              },
              {
                path: "steam-course",
                element: <SteamCourse />, 
              },
              {
                path: "steam-education-philosophy",
                element: <SteamEducationPhilosophy />, 
              },
              {
                path: "demo-gen-question",
                element: <DemoGen/>
              }
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading...
        </div>
      }
    ></React.Suspense>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// src/SchoolCarousel.tsx
import React, { FC } from "react";
import Marquee from "react-fast-marquee";
import { Card, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";

import school1 from "../../assets/images/school/s01.png";
import school2 from "../../assets/images/school/s02.png";
import school3 from "../../assets/images/school/s03.png";
import school4 from "../../assets/images/school/s04.png";
import school5 from "../../assets/images/school/s05.png";
import school6 from "../../assets/images/school/s06.png";
import school7 from "../../assets/images/school/s07.png";
import school8 from "../../assets/images/school/s08.png";
import school9 from "../../assets/images/school/s09.png";
import school10 from "../../assets/images/school/s10.png";
import school11 from "../../assets/images/school/s11.png";
import school12 from "../../assets/images/school/s12.png";
import school13 from "../../assets/images/school/s13.png";
import school14 from "../../assets/images/school/s14.png";
import school15 from "../../assets/images/school/s15.png";
import school16 from "../../assets/images/school/s16.png";
import school17 from "../../assets/images/school/s17.png";
import school18 from "../../assets/images/school/s18.png";
import school19 from "../../assets/images/school/s19.png";

const { Title } = Typography;

const SchoolCarousel: FC = () => {
  const { t } = useTranslation();

  const schools = [
    { name: "school1", logo: school1 },
    { name: "school2", logo: school2 },
    { name: "school3", logo: school3 },
    { name: "school4", logo: school4 },
    { name: "school5", logo: school5 },
    { name: "school6", logo: school6 },
    { name: "school7", logo: school7 },
    { name: "school8", logo: school8 },
    { name: "school9", logo: school9 },
    { name: "school10", logo: school10 },
    { name: "school11", logo: school11 },
    { name: "school12", logo: school12 },
    { name: "school13", logo: school13 },
    { name: "school14", logo: school14 },
    { name: "school15", logo: school15 },
    { name: "school16", logo: school16 },
    { name: "school17", logo: school17 },
    { name: "school18", logo: school18 },
    { name: "school19", logo: school19 },
  ];

  return (
    <div style={{ margin: "60px 0" }}>
      <Slide direction="up" triggerOnce>
        <Title level={3} style={{ textAlign: "center", marginBottom: "40px" }}>
          {t("about.partners.title", "Our Academic Partners")}
        </Title>
      </Slide>

      <Marquee speed={50} pauseOnHover={true} loop={0}>
        {schools.map((school, index) => (
          <div key={index} style={{ margin: "0 40px" }}>
            <img
              src={school.logo}
              alt={`${school.name} logo`}
              style={{ height: "60px", width: "auto" }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SchoolCarousel;

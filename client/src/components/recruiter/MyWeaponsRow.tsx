import { useNavigate } from "react-router-dom";
import { Card } from "./Card";

export function MyWeaponsRow() {
  const navigate = useNavigate();

  const weapons = [
    {
      title: "Skills",
      image: "/images/inception.jpg",
      path: "/recruiter/skills",
    },
    {
      title: "Projects",
      image: "/images/social-network.webp",
      path: "/recruiter/projects",
    },
    {
      title: "Experience",
      image: "/images/pursuit-of-happiness.png",
      path: "/recruiter/experience",
    },
    {
      title: "About Me",
      image: "/images/secret life of walter mitty.jpg",
      path: "/recruiter/about",
    },
  ];

  return (
    <section className="row-section">
      <h2 className="row-title">My Weapons</h2>
      <div className="cards-container">
        {weapons.map((weapon) => (
          <Card
            key={weapon.title}
            title={weapon.title}
            image={weapon.image}
            onClick={() => navigate(weapon.path)}
          />
        ))}
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

interface CardProps {
  title: string;
  image: string;
  onClick?: () => void;
  children?: ReactNode;
}

export function Card({ title, image, onClick }: CardProps) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay">
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </div>
  );
}

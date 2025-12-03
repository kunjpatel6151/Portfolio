interface ConnectIconProps {
  name: string;
  icon: string;
  url: string;
  color: string;
}

export function ConnectIcon({ name, icon, url, color }: ConnectIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="connect-icon"
      style={{ "--icon-color": color } as React.CSSProperties}
    >
      <div className="icon-wrapper">
        {/* If `icon` is a path to an image in `public/`, render an <img>; otherwise fall back to text */}
        {icon.startsWith("/") ? (
          <img src={icon} alt={name} className="icon-img" />
        ) : (
          <span className="icon-emoji">{icon}</span>
        )}
      </div>
      <p className="icon-label">{name}</p>
    </a>
  );
}

import "./Topbar.css";

export default function Topbar({ title, subtitle }) {
  return (
    <div className="admin-topbar">
      <div className="topbar-content">
        <div className="topbar-title">
          <h1>{title}</h1>
          {subtitle && <p className="topbar-subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

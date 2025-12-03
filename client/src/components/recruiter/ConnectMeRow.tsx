import { ConnectIcon } from "./ConnectIcon";

export function ConnectMeRow() {
  const platforms = [
    {
      name: "Codeforces",
      icon: "/images/codeforces.png",
      url: "https://codeforces.com/profile/kunjkumar6151",
      color: "#E50914",
    },
    {
      name: "GeeksforGeeks",
      icon: "/images/gfg.png",
      url: "https://www.geeksforgeeks.org/profile/kunjpatel6151",
      color: "#2F8D46",
    },
    {
      name: "LeetCode",
      icon: "/images/leetcode.png",
      url: "https://leetcode.com/u/Kunjkumar_Patel/",
      color: "#FFA726",
    },
    {
      name: "LinkedIn",
      icon: "/images/linkedin.png",
      url: "https://www.linkedin.com/in/kunj-patel-876a41325/",
      color: "#0077B5",
    },
    {
      name: "Github",
      icon: "/images/github.webp",
      url: "https://github.com/kunjpatel6151",
      color: "#E4405F",
    },
  ];

  return (
    <section className="row-section">
      <h2 className="row-title">Connect Me</h2>
      <div className="connect-container">
        {platforms.map((platform) => (
          <ConnectIcon
            key={platform.name}
            name={platform.name}
            icon={platform.icon}
            url={platform.url}
            color={platform.color}
          />
        ))}
      </div>
    </section>
  );
}

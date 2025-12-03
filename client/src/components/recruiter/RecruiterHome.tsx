import { Navbar } from "./Navbar";
import { HeroVideo } from "./HeroVideo";
import { MyWeaponsRow } from "./MyWeaponsRow";
import { ConnectMeRow } from "./ConnectMeRow";
import { Footer } from "./Footer";
import "../../styles/recruiter.css";

export function RecruiterHome() {
  return (
    <div className="recruiter-container">
      <Navbar />
      <HeroVideo />
      <div className="recruiter-content">
        <MyWeaponsRow />
        <ConnectMeRow />
      </div>
      <Footer />
    </div>
  );
}

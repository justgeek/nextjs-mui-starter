import { Logo } from "components/logo";
import { NavigationMenu } from "components/navigation";
import "./style.scss";

export const AppHeader = () => {
  return (
    <div className="header">
      <Logo />
      <nav>
        <NavigationMenu />
      </nav>
    </div>
  );
};

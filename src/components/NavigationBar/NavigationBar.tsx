import { NavLink } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";

const NavigationBar = (): React.ReactElement => {
  return (
    <NavigationBarStyled>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movie/add">Add movie</NavLink>
        </li>
      </ul>
    </NavigationBarStyled>
  );
};

export default NavigationBar;

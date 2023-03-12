import { searchIconGrey } from "../../components/assets";
import "./style.css";

const SearchInput = (props) => {
  return (
    <div className="search-input-container flex">
      <img src={searchIconGrey} alt="searchIcon" />
      <input placeholder="Find your music" />
    </div>
  );
};

export default SearchInput;
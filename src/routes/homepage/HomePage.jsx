import SearchBar from "../../components/searchbar/SearchBar";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className="title">Sell or Rent your Property for Free</h1>
          <p>
            Whether you are ready to sell or looking for answers, we'll guide
            you with data and expertise specific to your
          </p>
          <p> needs.</p>

          <SearchBar />
        </div>
      </div>
      <div className="imagecontainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
export default HomePage;

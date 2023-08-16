import { useState } from "react";
import "./home.css";
import PropertyCard from "./PropertyCard";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { PROPERTY_DATA } from "../DummyData/Data";
import Select from "./common/Select";
import {
  LOCATION_FILTER_CONFIG,
  PRICE_FILTER_CONFIG,
  PROPERTY_TYPE_FILTER_CONFIG,
} from "../config/FilterConfig";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

function Home() {
  const [location, setLocation] = useState("All");
  const [price, setPrice] = useState("All");
  const [type, setType] = useState("All");
  const [propertyData, setPropertyData] = useState(PROPERTY_DATA);
  const [initialData, setInitialData] = useState(PROPERTY_DATA);

  function handleSearch() {
    let filteredData = initialData.filter((eachProperty) => {
      return (
        (location === "All" || location === eachProperty.location) &&
        (type === "All" || type === eachProperty.type) &&
        (price == "All" || price == eachProperty.price)
      );
    });
    // console.log(filteredData);
    console.log(location, type, price);
    setPropertyData(filteredData);
  }
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <NavBar />
      <div className="app-search">
        <label className="Search-properties">Search properties to rent</label>
        <SearchBar />
      </div>
      <div className="filters">
        <Select
          {...LOCATION_FILTER_CONFIG}
          onChange={setLocation}
          value={location}
        />
        <div>
          <label className="filter-loc">When</label>
          <div className="headerSearchItem">
            <CalendarMonthIcon
              icon={CalendarMonthIcon}
              className="headerIcon"
            />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
              dates[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
        </div>
        <Select {...PRICE_FILTER_CONFIG} onChange={setPrice} value={price} />
        <Select
          {...PROPERTY_TYPE_FILTER_CONFIG}
          onChange={setType}
          value={type}
        />
        <div>
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>

      <div className="app-card">
        {propertyData.map((eachProperty, index) => {
          return <PropertyCard key={index} {...eachProperty} />;
        })}
      </div>
    </div>
  );
}

export default Home;

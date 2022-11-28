import { fetchHouseholdById } from "../MockData/utils/FetchData";
import JSONPretty from "react-json-pretty";
import "./Household.css";

const Household = ({ id }) => {
  const data = fetchHouseholdById();

  return (
    <>
      <div className="household-main-container">
        <div className="household-title">
          <div style={{ display: "inline-block", "align-items": "center" }}>
            <h2>Welcome, </h2>
            <h1
              style={{
                "font-weight": "bold",
                fontSize: "40px",
                color: "#5265c4",
              }}
            >
              {data.name}!
            </h1>
          </div>
          <div
            style={{
              padding: "30px",
              width: "200px",
              height: "200px",
              display: "inline-block",
              textAlign: "center",
            }}
          ></div>
          <JSONPretty data={data} />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Household;

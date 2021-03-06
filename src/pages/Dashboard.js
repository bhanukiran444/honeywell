import React, { useState, useEffect } from "react";
import axios from "axios";
import ContriesList from "../components/ContriesList";

function Dashboard() {
  const [globalCovidData, setglobalCovidData] = useState({});
  const [countriesData, setCountriesData] = useState({});

  useEffect(() => {
    axios("https://covidapi.info/api/v1/global").then((response) =>
      setglobalCovidData(response.data.result)
    );
    axios("https://covidapi.info/api/v1/global/latest").then((response) =>
      setCountriesData(response.data.result)
    );
  }, []);

  const { confirmed, deaths, recovered } = globalCovidData;
  return (
    <>
      <div>
        <p>Confirmed: {confirmed}</p>
        <p>Deaths: {deaths}</p>
        <p>Recovered: {recovered}</p>
      </div>
      <ContriesList countriesData={countriesData} />
    </>
  );
}

export default Dashboard;

import React from "react";

export default function ContriesList({ countriesData }) {
    if(Object.keys(countriesData).length === 0) return <p>loading..</p>
    return (
    <table>
      <tr>
        <th>Country Name</th>
        <th>Confirmed</th>
        <th>Deaths</th>
        <th>Recovered</th>
      </tr>
      {countriesData && countriesData.map((country) => {
        const countryName = Object.keys(country)[0];
        const confirmed = country[countryName].confirmed
        const deaths = country[countryName].deaths
        const recovered = country[countryName].recovered
        return (
          <tr key={countryName}>
              <td>{countryName}</td>
              <td>{confirmed}</td>
              <td>{deaths}</td>
              <td>{recovered}</td>
          </tr>
      ) 
      })}
    </table>
  );
}

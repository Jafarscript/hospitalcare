import React, { useState, useEffect } from "react";
import { talpihos, list, listedItem, container, identify, red, blue, lightred } from "./hospitalList.module.css";


const HospitalList = () => {
  const [hospital, setHospital] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(`Hospital`, hospital);
  const baseUrl = "https://covid-19-data.p.rapidapi.com/totals";

  const getHospitals = async () => {
    try {
      const hospitalData = await fetch(baseUrl, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key": "deb1ae6be7msh28811a9c645a138p170d2cjsna7dcbe2408e0"
        }
      });
      const result = await hospitalData.json();
      console.log("Covid result", result);
      setHospital(result);
      setLoading(true);
    } catch (error) {}
  };
  useEffect(() => {
    getHospitals();
  }, []);

  return (
    <div className={container}>
      <h1 className={talpihos}>Total Covid-19 Cases</h1>{" "}
      {hospital.map((item) => {
        return (
          <ul key={item.key} className={list}>
            <li className={listedItem}><span className={identify}>Confirmed Case</span> {item.confirmed}</li>
            <li className={listedItem}><span className={identify}>Recovered Cases</span> {item.recovered}</li>
            <li className={listedItem}><span className={`${identify} ${lightred}`}>Critical Case</span> {item.critical}</li>
            <li className={listedItem}><span className={`${identify} ${red}`}>Deaths</span> {item.deaths}</li>
            <li className={listedItem}><span className={`${identify} ${blue}`}>Last Update</span> {item.lastUpdate}</li>
            <li className={listedItem}><span className={identify}>Last Change:</span> {item.lastChange}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default HospitalList;

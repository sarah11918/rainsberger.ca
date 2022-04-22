import React from "react";
import { useState } from "react";


export default function BirdFetchComponent() {
  const [recentBirds, setRecentBirds] = useState([]);
  const [location, setLocation] = useState("");

  async function getBirdSightings(event) {
    event.preventDefault();
    setLocation(event.target.elements.location.value.toUpperCase());
    const queryLocation = event.target.elements.location.value.toUpperCase();
    const recentUrl = `https://api.ebird.org/v2/data/obs/${queryLocation}/recent?back=14`;
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken",`${process.env.EBIRD_API_KEY}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    const response = await fetch(recentUrl, requestOptions);
    const data = await response.json();
    setRecentBirds(data);
  }

  return (
    <div style={{ backgroundColor: "#eef9ed", padding:"0.5em", border: "1px solid green", borderRadius: "2px"}}>
      <h3>Get a list of recently-observed birds in your area!</h3>
      <h5 className="birdtab">Current location set: {location} </h5>
      
      <form onSubmit={getBirdSightings}>
        <input
          name="location"
          type="text"
          placeholder="eBird region ID eg. CA-PE"
          style={{ textTransform: "uppercase" }}
        />
        <button> See the birds!</button>
      </form>

      <h3>Reported in the last 14 days...</h3>
      {recentBirds.map((bird) => (
        <p>
          {bird.howMany} {bird.comName}(s) seen at {bird.obsDt.toString().slice(11)} on {bird.obsDt.toString().slice(5,10)}
        </p>
      ))}
    </div>
  );
}

import axios from "axios";
import React from "react";

const url = "https://www.course-api.com/react-tours-project";

interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}
async function fetchTours() {
  const response = await axios.get(url);
  const data: Tour[] = await response.data;
  return data;
}

export default async function TourPage() {
  const data = await fetchTours();

  return (
    <div>
      <h1>TOUR PAGE</h1>
      {data.map((tour) => {
        return (
          <p key={tour.id}>
            {tour.name}
            {tour.info}
          </p>
        );
      })}
    </div>
  );
}

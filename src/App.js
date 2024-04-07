import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

const removeTour = (id) => {
const newTours = tour.filter((tour) => tour.id !== id);

setTour(newTours);
}



  const fetchTours = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
setLoading(false);
setTour(tours)
    }catch(error){
setLoading(false);
console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

if(tour.length === 0){
  return <main>
    <div className="title">
      <h2>No Tours left</h2>
      <button onClick={() => fetchTours()}  className="btn">Refresh</button>
    </div>
  </main>
}


  return (
    <main>
      <Tours tours={tour} removeTour={removeTour} />
    </main>
  );
}

export default App;

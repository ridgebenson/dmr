import { useState, useEffect } from "react";
import axios from "axios";

const DisasterList = () => {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await axios.get('http://localhost:5000/disasters');
        setDisasters(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDisasters();
  }, []);

  return (
    <div className="dsReportingDiv">
      <h1 style={{color:'black',textAlign:'center'}}>Reported Disasters</h1>
      <div className="disastersDiv">
        {disasters.length > 0 ? (
          <ul>
            {disasters.map((disaster) => (
              <li key={disaster._id}>
                <h2>{disaster.disasterType}</h2>
                <p>{disaster.description}</p>
                <p>{disaster.severity}</p>
                {disaster.image && <img src={require(`../../uploads/${disaster.image}`)} 
                  alt="Disaster" 
                  height={100}
                  width={100}
                />}
                {/* <img src={require(`../../uploads/${disaster.image}`)}></img> */}
                {/* Add more disaster details here */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No disasters reported.</p>
        )}
      </div>
      
    </div>
  );
};

export default DisasterList;

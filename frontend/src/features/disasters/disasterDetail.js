import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DisasterDetail = () => {
    const { id } = useParams();
    const [disaster, setDisaster] = useState(null);
    
    useEffect(() => {
        const fetchDisaster = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/disasters/${id}`);
                setDisaster(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
    
        fetchDisaster();
    }, [id]);
    
    return (
        <>
            {disaster ? (
                <>
                <h1 style={{color:"rgb(27, 40, 223)",textAlign:"center",marginTop:'5px'}}>{disaster.disasterType}</h1>
                <div className="disasterDetailMainDiv">
                    <div className="disasterImageDiv">
                        <h2 style={{color:"#1B4552",textAlign:"center",marginTop:'0px',padding:"10px"}}>Image</h2>
                        {disaster.image ? (
                            <img src={require(`../../uploads/${disaster.image}`)} alt="Disaster Image" className="disasterImage" />
                        ) : (
                            'N/A'
                        )}
                    </div>
                    <div className="disasterInfoDiv">
                        <div>
                            <h2>Severity</h2>
                            <p>{disaster.severity}</p>
                        </div>
                        <div>
                            <h2>Description</h2>
                            <p>{disaster.description}</p>
                        </div>
                        <div>
                            <h2>Location</h2>
                            {disaster.location && disaster.location.coordinates ? (
                            <p>{disaster.location.coordinates[0]}, {disaster.location.coordinates[1]}</p>
                            ) : (
                            'N/A'
                            )}
                        </div>
                    </div>

                </div>
                
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
        // <div className="dsReportingDiv">
            
        /* </div> */
    );
};

export default DisasterDetail;

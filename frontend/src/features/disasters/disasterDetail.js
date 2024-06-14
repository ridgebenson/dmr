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
        <div className="dsReportingDiv">
        <h1 style={{color:"#1B4552",textAlign:"center",marginTop:'5px'}}>Disaster Details</h1>
        {disaster ? (
            <div className="disasterDetailDiv">
            <h2>{disaster.disasterType}</h2>
            <p><strong>Description:</strong> {disaster.description}</p>
            <p><strong>Severity:</strong> {disaster.severity}</p>
            <p><strong>Location:</strong> {disaster.location && disaster.location.coordinates ? `Location: ${disaster.location.coordinates[1]}, ${disaster.location.coordinates[0]}` : 'N/A'}</p>
            <p><strong>Reported At:</strong> {disaster.reportedat}</p>
            <p><strong>Image:</strong> {disaster.image ? <img src={require(`../../uploads/${disaster.image}`)} alt="Disaster" height={100} width={100} /> : 'N/A'}</p>
            </div>
        ) : (
            <p style={{color:'black'}}>Loading...</p>
        )}
        </div>
    );
    };

export default DisasterDetail;
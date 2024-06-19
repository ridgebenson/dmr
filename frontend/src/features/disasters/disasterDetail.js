import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { OPENCAGE_API_KEY } from "../../config";
// import { OPENCAGE_API_KEY } from "../../../env";
import { OPENCAGE_API_KEY } from "../../utils/config";


const DisasterDetail = () => {
    const { id } = useParams();
    const [disaster, setDisaster] = useState(null);
    
    // useEffect(() => {
    //     const fetchDisaster = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:5000/disasters/${id}`);
    //             setDisaster(response.data);
    //         } catch (error) {
    //             console.error("Error fetching data: ", error);
    //         }
    //     };
    
    //     fetchDisaster();
    // }, [id]);
    
    useEffect(() => {
        const fetchDisaster = async () => {
            try {
                // Fetch disaster data
                const response = await axios.get(`http://localhost:5000/disasters/${id}`);
                setDisaster(response.data);
    
                // Check if location coordinates are available
                if (response.data.location && response.data.location.coordinates) {
                    const latitude = response.data.location.coordinates[0];
                    const longitude = response.data.location.coordinates[1];
    
                    // Make API request to OpenCage Data to get the address
                    const openCageResponse = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`);
    
                    // Extract the formatted address from the response
                    const formattedAddress = openCageResponse.data.results[0].formatted;
    
                    // Update your state with the formatted address
                    setDisaster(prevDisaster => ({
                        ...prevDisaster,
                        formattedAddress: formattedAddress
                    }));
                }
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
                            {/* {disaster.location && disaster.location.coordinates ? (
                            <p>{disaster.location.coordinates[0]}, {disaster.location.coordinates[1]}</p>
                            ) : (
                            'N/A'
                            )} */}
                            {disaster.formattedAddress ? (
                                <p>{disaster.formattedAddress}</p>
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

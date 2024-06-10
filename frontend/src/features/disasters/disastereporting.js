// import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const DisasterReporting = () => {
    const date = new Date();
    const reportedat = new Intl.DateTimeFormat('en-US', { dateStyle: 'full',timeStyle:'long' }).format(date);

    const [disasterInfo, setDisasterInfo] = useState({
        // location:{
        //     latitude: null,
        //     longitude: null
        // },
        location: {
            latitude: null,
            longitude: null
        },
        reportedat,
        disasterType: '',
        description: '',
        severity: '',
        image: ''
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          await getLocation(); // Call getLocation first
      
          const formData = new FormData();
          Object.keys(disasterInfo).forEach(key => {
            if (key !== 'image') {
              formData.append(key, disasterInfo[key]);
            }
          });
          formData.append('image', disasterInfo.image);
      
          const res = await axios.post("http://localhost:5000/reportdisaster", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(res);
          alert("Disaster reported successfully");
        } catch (err) {
          alert(err);
        }
      };
      
    
    const getLocation = () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position)=>{
                    console.log(position);
                    setDisasterInfo({
                        ...disasterInfo,
                        location:{
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        }
                    });
                    resolve();
                });
            } else {
                alert("Geolocation is not supported by this browser.");
                reject();
            }
        });
    }
    
    

    const content = (
        <>
        <div className="dsReportingDiv">
            <div className="disasterReporting-form">
                <h2 style={{color:"#1B4552",textAlign:"center",marginTop:'5px'}}>Report a Disaster</h2>
                <form className="dsr-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="disasterType" className="form-label">
                            <strong>Disaster Type</strong>
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Disaster Type"
                            autoComplete="off"
                            name="disasterType"
                            className="form-control"
                            onChange={(e) => setDisasterInfo({...disasterInfo, disasterType: e.target.value})}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="disaster-severity" className='form-label'>
                            <strong>
                                Disaster Severity:
                            </strong> 
                        </label>
                        <select id="disaster-severity" className='form-control' onChange={(e) => setDisasterInfo({...disasterInfo, severity: e.target.value})}>
                            <option value="">--Please choose an option--</option>
                            <option value="minor">Minor</option>
                            <option value="moderate">Moderate</option>
                            <option value="severe">Severe</option>
                            <option value="extreme">Extreme</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="form-label">
                            <strong>Description</strong>
                        </label>
                        <textarea id="description" placeholder="Describe the disaster..." className='form-control' onChange={(e) => setDisasterInfo({...disasterInfo, description: e.target.value})}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="image" className="form-label">
                            <strong>Upload Image</strong>
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            multiple
                            className="form-control"
                            onChange={(e) => {
                                setDisasterInfo({
                                    ...disasterInfo,
                                    image: e.target.files[0]
                                });
                            }}
                            
                        />
                    </div>

                    <div class="form-group">
                        <input type="checkbox" id="confirmation" required/>
                        <label for="confirmation" class='form-label'>I confirm the accuracy of this report</label>
                    </div>
                    
                    <button type="submit" className="reportDisaster-button" onClick={getLocation}>Report Disaster</button>
                </form>
            </div>
        </div>
        </>
    );
    

  return content;
};

export default DisasterReporting;

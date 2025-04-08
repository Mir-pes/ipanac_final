import { useState } from "react";
import "./enquire.css"; 
import { User, Mail, Phone, Calendar } from "lucide-react";  
import logo from "./assets/IpanacRelocationLogo.png";

function Quote() {
  const [locationType, setLocationType] = useState("local");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    items: [],
    baseLocation: "",
    destination: "",
    movingDate: "",
    description: "",
  });

  const localPlaces = ["Ajman", "Ras Al Khaimah", "Abu Dhabi", "Dubai", "Sharjah", "Fujairah", "Umm Al Quwain"];
  const internationalCountries = ["C1", "C2", "C3", "C4", "C5", "C6", "C7"];
  
  const places = locationType === "local" ? localPlaces : internationalCountries;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const newItems = checked
          ? [...prev.items, value]
          : prev.items.filter((item) => item !== value);
        return { ...prev, items: newItems };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://ipanac-final-pg1q.vercel.app//api/index", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Your quick quote has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          items: [],
          baseLocation: "",
          destination: "",
          movingDate: "",
          description: "",
        });
      } else {
        alert("Failed to submit your quick quote. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting quick quote:", error);
      alert("An error occurred while submitting your quick quote.");
    }
  };

  return (        
    <div className="enquire-page">
      <div className="enquire-wrapper">
        <div className="enquire-logo-section">
          <img src={logo} alt="IPANAC Relocation Logo" className="enquire-logo" />
          <p className="tagline">Smooth Move, Easy Relocation</p>
        </div>

        <div className="enquire-form-section">
          <form onSubmit={handleSubmit}>
            <div className="header">                 
              <h1>Quick Quote</h1>                 
            </div>             
            <div className="inputs">                 
              <div className="input-group">                     
                <label className="name">Name:</label>                         
                <div className="input">                             
                  <User size={16.5}/>                             
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" required/>                         
                </div>                     
              </div>                   
              <div className="input-group">                 
                <label className="name">Email:</label>                     
                <div className="input">                         
                  <Mail size={16.5}/>                         
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" required/>                     
                </div>                 
              </div>                   
              <div className="input-group">                 
                <label className="name">Contact No:</label>                     
                <div className="input">                         
                  <Phone size={16.5}/>                         
                  <input type="tel" name="contact" value={formData.contact} onChange={handleInputChange} placeholder="Enter your contact number" required/>                     
                </div>                  
              </div>
              
              <div>  
                <label className="Items" style={{ marginBottom: "8px", marginTop: "20px" }}>Items:</label>
              </div>

              <div className="checkbox-group1" style={{ marginLeft: "30px" }}>
                <input type="checkbox" name="items" value="Electronics" checked={formData.items.includes("Electronics")} onChange={handleInputChange}/>
                Electronics
              </div>

              <div className="checkbox-group" style={{ margin: "6px 15px", marginLeft: "25.5px" }}>
                <input type="checkbox" name="items" value="Furniture" checked={formData.items.includes("Furniture")} onChange={handleInputChange}/>
                Furniture
              </div>

              <div className="checkbox-group2" style={{ marginTop: "8px", marginLeft: "149px" }}>
                <input type="checkbox" name="items" value="Appliances" checked={formData.items.includes("Appliances")} onChange={handleInputChange}/>
                Appliances
              </div>

              <div className="checkbox-group3" style={{ marginLeft: "92px" }}>
                <input type="checkbox" name="items" value="Decor" checked={formData.items.includes("Decor")} onChange={handleInputChange}/>
                Decor
              </div> 

              <div className="checkbox-group">
                <label className="checkbox-label"> Origin: </label>
                <input 
                  type="radio" 
                  name="locationType" 
                  value="local" 
                  checked={locationType === "local"}
                  onChange={() => setLocationType("local")}
                  required
                />
                Local
              </div>
              
              <div className="input-group">                 
                <label className="name">Base Location:</label>                     
                <div className="input">                        
                  <select className="dropdown" name="baseLocation" value={formData.baseLocation} onChange={handleInputChange} required>
                    <option value="">Select Origin</option>
                    {places.map((place, index) => (
                      <option key={index} value={place}>{place}</option>
                    ))}
                  </select>                     
                </div>                 
              </div> 
              
              <div className="input-group">                 
                <label className="name">Destination:</label>                     
                <div className="input">                         
                  <select className="dropdown" name="destination" value={formData.destination} onChange={handleInputChange} required>
                    <option value="">Select Destination</option>
                    {places.map((place, index) => (
                      <option key={index} value={place}>{place}</option>
                    ))}
                  </select>                    
                </div>                 
              </div>
              
              <div className="input-group">                 
                <label className="name">Expected moving date:</label>                     
                <div className="input">
                  <Calendar />                         
                  <input type="date" name="movingDate" value={formData.movingDate} onChange={handleInputChange} placeholder="Select date" required/>                     
                </div>                 
              </div>

              <div className="input-group">
                <label className="name">Description:</label>
                <textarea 
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginTop: '8px',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    minHeight: '100px'
                  }}
                  placeholder="Enter brief Description about the Products you wish to service..."
                />
              </div>
                            
              <div className="submit-container">                         
                <button type="submit" className="submit" style={{ display: "flex", marginLeft: "130px" }}>Submit</button>                     
              </div>                 
            </div>             
          </form>
        </div>
      </div>
    </div>      
  ); 
}  

export default Quote;

import { useState } from "react";
import "./enquire.css";
import { User, Mail, Phone, Calendar } from "lucide-react";
import logo from "./assets/IpanacRelocationLogo.png";

function Enquire() {
  const [locationType, setLocationType] = useState("local");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    baseLocation: "",
    destination: "",
    movingDate: "",
    description: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const localPlaces = [
    "Ajman",
    "Ras Al Khaimah",
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Fujairah",
    "Umm Al Quwain",
  ];
  const internationalCountries = ["C1", "C2", "C3", "C4", "C5", "C6", "C7"];

  const places = locationType === "local" ? localPlaces : internationalCountries;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://ipanac-final-pg1q.vercel.app//api/index", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          locationType,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitStatus("Enquiry submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          baseLocation: "",
          destination: "",
          movingDate: "",
          description: "",
        });
      } else {
        setSubmitStatus(result.error || "Failed to submit enquiry.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("An error occurred while submitting.");
    }
  };

  return (
    <div className="enquire-page">
      <div className="enquire-wrapper">
        <div className="enquire-logo-section">
          <img
            src={logo}
            alt="IPANAC Relocation Logo"
            className="enquire-logo"
          />
          <p className="tagline">Smooth Move, Easy Relocation</p>
        </div>

        <div className="enquire-form-section">
          <h2 className="Message" style={{ color: "red" }}>
            Register
          </h2>

          <form className="enquire-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name:</label>
              <div className="input">
                <User size={16.5} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Email:</label>
              <div className="input">
                <Mail size={16.5} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Phone No:</label>
              <div className="input">
                <Phone size={16.5} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                Origin:
                <input
                  type="radio"
                  name="locationType"
                  value="local"
                  checked={locationType === "local"}
                  onChange={() => setLocationType("local")}
                  required
                />
                Local
              </label>
              {/* Uncomment if needed */}
              {/* <label className="checkbox-label">
                <input
                  type="radio"
                  name="locationType"
                  value="international"
                  checked={locationType === "international"}
                  onChange={() => setLocationType("international")}
                />
                International
              </label> */}
            </div>

            <div className="input-group">
              <label>Base Location:</label>
              <div className="input">
                <select
                  className="dropdown"
                  name="baseLocation"
                  value={formData.baseLocation}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Origin</option>
                  {places.map((place, index) => (
                    <option key={index} value={place}>
                      {place}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Destination:</label>
              <div className="input">
                <select
                  className="dropdown"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Destination</option>
                  {places.map((place, index) => (
                    <option key={index} value={place}>
                      {place}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Expected Moving Date:</label>
              <div className="input">
                <Calendar />
                <input
                  type="date"
                  name="movingDate"
                  value={formData.movingDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Description:</label>
              <textarea
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  marginTop: "8px",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  minHeight: "100px",
                }}
                placeholder="Enter brief Description about the Products you wish to service..."
              />
            </div>

            <div className="submit-container">
              <button type="submit" className="submit">
                Submit
              </button>
            </div>

            {submitStatus && (
              <p
                style={{
                  color: submitStatus.includes("success") ? "green" : "red",
                  marginTop: "10px",
                }}
              >
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enquire;

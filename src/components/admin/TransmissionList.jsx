import TransmissionCard from "./TransmissionCard";
import "./TransmissionList.css";

export default function TransmissionList() {
  const transmissions = [
    { id: 1, name: "Capilla La Gloria", status: "online" },
    { id: 2, name: "Capilla El Edén", status: "offline" },
  ];

  return (
    <div className="transmission-list">
      <h2 className="transmission-title">TRANSMISIONES CREADAS</h2>
      <div className="transmission-container">
        {transmissions.map((trans) => (
          <TransmissionCard key={trans.id} name={trans.name} status={trans.status} />
        ))}
      </div>
    </div>
  );
}

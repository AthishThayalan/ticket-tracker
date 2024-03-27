import "./EmployeeName.scss";

const EmployeeName = ({ name }: { name: string }) => {
  return (
    <div className="name-card">
      <h2 className="name-card__name">{name}</h2>
    </div>
  );
};

export default EmployeeName;

import { useParams } from "react-router-dom";
import team from "../../data/team";
import Default from "../../../public/default.jpg";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const { id } = useParams();
  const employee = team.find(
    (employee) => employee.id === parseInt(id as string)
  );

  if (!employee) {
    return <div>Employee not found</div>;
  }
  const profilePicture = employee.profile.profilePicture || Default;

  return (
    <div className="profile__container">
      <div className="profile__header">
        <img
          src={profilePicture}
          alt={employee.name}
          className="profile__picture"
        />
        <div className="profile__info">
          <h1>{employee.name}</h1>
          <h2>{employee.role}</h2>
          <p>
            <strong>Experience:</strong> {employee.profile.experience}
          </p>
          <p>
            <strong>Department:</strong> {employee.profile.department}
          </p>
          <p>
            <strong>Tech Stack:</strong> {employee.profile.techstack.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

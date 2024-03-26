import "./ProfilePage.scss";

const ProfilePage = () => {
  const profileData = {
    id: 1,
    name: "Alima Miller",
    role: "Junior Software Developer",
    profile: {
      experience: "1 year",
      department: "Engineering",
      techstack: ["JavaScript", "React", "Node.js"],
      profilePicture:
        "https://eu.ui-avatars.com/api/?name=Alima+Miller&size=250",
    },
  };

  return (
    <div className="profile__container">
      <div className="profile__header">
        <img
          src={profileData.profile.profilePicture}
          alt={profileData.name}
          className="profile__picture"
        />
        <div className="profile__info">
          <h1>{profileData.name}</h1>
          <h2>{profileData.role}</h2>
          <p>
            <strong>Experience:</strong> {profileData.profile.experience}
          </p>
          <p>
            <strong>Department:</strong> {profileData.profile.department}
          </p>
          <p>
            <strong>Tech Stack:</strong>{" "}
            {profileData.profile.techstack.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

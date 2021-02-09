let ProfilePhotoStyle = {
  border: "2px solid white",
  padding: "10px",
  borderRadius: "50px 20px",
  width: "500px",
  height: "600px"
}
const ProfilePhoto = () => {
  return (
    <div>
      <img src="/image/CvPicture.jpg" style={ProfilePhotoStyle} alt="My profile photo"/>
    </div>
  );
}

export default ProfilePhoto;
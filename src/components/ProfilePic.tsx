import { RiArrowDownSFill } from "react-icons/ri";

const ProfilePic = () => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src="https://api.lorem.space/image/face?hash=j2a43zz6" 
        alt="Profile pic (replace this text with username)" 
        className="cursor-pointer rounded-full w-16 h-16 object-cover mb-1"
      />
      <div className="flex items-center">
        <span className="mr-1 text-sm">AIMEUR Amin</span>
        <RiArrowDownSFill size={15} />
      </div>
    </div>
  );
};

export default ProfilePic;
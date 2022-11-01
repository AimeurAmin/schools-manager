import ProfilePic from "@components/ProfilePic";

const Navbar = () => {
  return (
    <div className="bg-dark-100 w-full text-white-100 px-20 py-6 border-black-100 shadow-custom flex justify-end">
      <ProfilePic />
    </div>
  );
};

export default Navbar;

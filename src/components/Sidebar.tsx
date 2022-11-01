import { HiHome } from "react-icons/hi";
import { MdPointOfSale } from "react-icons/md";
import { BsPeopleFill  } from "react-icons/bs";
import { FaChalkboardTeacher } from 'react-icons/fa'


import { RiLogoutBoxFill } from "react-icons/ri";
import SidebarItem from "@components/SidebarItem";
import logo from "../assets/imgs/Logo-market-manager.png";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="h-full w-72 bg-dark-100 relative shadow-custom-h border-black-100">
      <Image src={logo} alt="Market Manager" className="h-15 mx-auto mb-6 my-10 py-1" />
      <div className="items">
        <SidebarItem Icon={HiHome} text="Accueil" href="/" />
        <SidebarItem Icon={BsPeopleFill} text="Étudiants" href="/students" />
        <SidebarItem Icon={FaChalkboardTeacher} text="Enseignants" href="/teachers" />
        <SidebarItem Icon={MdPointOfSale} text="Caisse" href="/cashier" />
      </div>

      <SidebarItem
        Icon={RiLogoutBoxFill}
        text="Déconnecter"
        href="/login"
        onClick={() => {
          localStorage.removeItem('token')
        }}
        className="absolute bottom-0"
      />
    </div>
  );
};

export default Sidebar;
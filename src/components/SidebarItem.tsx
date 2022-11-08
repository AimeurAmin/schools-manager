import { useRouter } from "next/router";
import React, { DOMAttributes, PropsWithChildren, ReactNode } from "react";


interface Props {
  Icon: Function;
  text: string;
  size?: number;
  children?: ReactNode;
  onClick?: any;
  href?: any;
  className?: string;
}

const SidebarItem = ({ Icon, size = 26, text,  href, className = "", onClick }: Props) => {
  const router = useRouter();

  const selectedPath = "bg-dark-60 mr-20";
  const notSelectedPath = "hover:bg-dark-80";

  const handleClick = (e: any) => {
    e.preventDefault()
    if(onClick) {
      onClick();
    }
    router.push(href)
  }
  return (
    <a
      className={`${router.asPath === href ? selectedPath : notSelectedPath} w-full flex justify-center px-4 py-4 ${className}`}
      href={href}
      onClick={handleClick}
    >
      <div className="flex justify-start w-52">
        <Icon color="white" size={size} className="mr-6"/>
        <span className="text-xl">{text}</span>
      </div>
    </a>
  );
};

export default SidebarItem;
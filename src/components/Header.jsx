import { links } from "../assets/constants";
import Searchbar from "./Searchbar";
import { SidebarItem } from "./Sidebar";

export default function Header (){
    return (
        <header className="h-[54px] flex items-center bg-black justify-between">
        <div className="flex">
        {links.slice(0,2).map((link, index) => (
            <SidebarItem 
            key={index} 
            icon={link.icon}
            title={link.name}
            />
        ))}
        </div>
        <div className="">
        <Searchbar />
        </div>

        </header>
    )

}
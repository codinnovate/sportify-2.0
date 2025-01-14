import { links } from "../assets/constants";
import Searchbar from "./Searchbar";
import { SidebarItem } from "./Sidebar";

export default function Header (){
    return (
        <header className="hidden h-[54px] md:flex items-center bg-black justify-between">
        <div className="flex">
        {links.slice(0,2).map((link, index) => (
            <SidebarItem 
            key={index} 
            icon={link.icon}
            title={link.name}
            />
        ))}
        </div>
        <Searchbar />
        <div className='w-10 h-5 bg-green-600 '>
        </div>
        </header>
    )

}
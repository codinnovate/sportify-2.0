import { links } from "../assets/constants";
import Searchbar from "./Searchbar";
import { SidebarItem } from "./Sidebar";
import assets from "../assets";
import Image from '../components/Image'
export default function Header (){
    return (
        <header className="hidden h-[54px] md:flex items-center bg-black justify-between md:mr-2.5">
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
        <div className="flex gap-[13px]">
        <Image src={assets.bellIcon} />
        <Image src={assets.lockIcon} />
        <Image src={assets.personIcon} />
        <Image src={assets.avatarIcon} />
        </div>
        </header>
    )

}
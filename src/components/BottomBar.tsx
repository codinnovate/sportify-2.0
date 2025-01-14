import { links } from "../assets/constants"

const BottombarItem = ({icon, title}) => {
    return (
    <div className="flex flex-col p-1  px-5 items-center  hover:bg-halfblack   transition-all delay-75 duration-150 ease-out cursor-pointer rounded-xl">
      <img src={icon} />
      <span className="text-secondary">{title}</span>
    </div>
    )
}


export default function BottomBar(){
    return (
        <div className="p-4 pb-6 bottom-0   absolute right-0 left-0 w-full md:hidden flex justify-between">
            {links.slice(0, 4).map((link, index) => (
                <BottombarItem
                 key={index} 
                 icon={link.icon} 
                 title={link.name}
                 />
            ))}

        </div>
    )
}
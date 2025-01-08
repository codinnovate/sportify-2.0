import { links } from "../assets/constants";

export const SidebarItem = ({icon, title}) => (
  <div className="flex  items-center min-w-[210px] hover:bg-halfblack pl-[11px] py-[2.79px] transition-all delay-75 duration-150 ease-out cursor-pointer rounded-xl">
    <img src={icon} />
    <span className="text-secondary">{title}</span>
  </div>
)

const Sidebar = () => (
  <div className="hidden md:flex  p-[11px] w-[248px] min-h-screen  flex-col gap-[11px]">
    {links.slice(2,links.length).map((link, i) => (
      <SidebarItem 
      key={i}
      icon={link.icon}
      title={link.name}
      />
    ))}
  </div>
);

export default Sidebar;

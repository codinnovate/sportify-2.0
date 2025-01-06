import { links } from "../assets/constants";

const SidebarItem = ({icon, title}) => (
  <div className="flex  items-center h-[40.41px]">
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

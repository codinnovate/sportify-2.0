

const SidebarItem = () => (
  <div className="h-[40.41px]">
    <img src={icon} />
    <span className="text-secondary">{title}</span>
  </div>
)

const Sidebar = () => (
  <div className="hidden md:flex px-[11px]  flex-col gap-[11px]">Sidebar</div>
);

export default Sidebar;

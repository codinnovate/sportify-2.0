import assets from "../assets";


const Searchbar = () => (
    <div className="bg-transparent flex items-center">
    <img 
     src={assets.searchIcon}
     alt="Search icon"
     />
    <input
    className="bg-transparent outline-none placeholder:text-grey" 
    type="text" 
    placeholder='Search'
    />
    </div>
);

export default Searchbar;

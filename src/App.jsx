import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay , Header} from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
import BottomBar from './components/BottomBar';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);



  return (
    <div className="relative flex bg-black">
     
      <Sidebar />
      <div className="flex-1 flex flex-col ">
        <Header />       
        <div className="px-6 h-[calc(100vh-72px)] bg-gradient-to-br border-[#202020] border-2 rounded-[10px] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse ">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>

      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
       <BottomBar />
    </div>
  );
};

export default App;

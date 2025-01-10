import { PlayControls } from './PlayControls';
import { CurrentSong } from './CurrentSong';
import { OtherItems } from './OtherItems';

export default function Playing(){
    return (
        <div className="bg-[#333842] h-[81px] w-full p-3">
            <PlayControls
             />
            <CurrentSong
             />
            <OtherItems
             />
        
        </div>
    )
}
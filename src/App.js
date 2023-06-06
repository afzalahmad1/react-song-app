import React from "react";
import SongList from "./Components/SongList";
import SongDetails from "./Components/SongDetails";

const App  =() =>{
  

    return (
        <div>
            <div>
            <SongList/>
            </div>
           
            <SongDetails/>
        </div>
    );
}

export default App;
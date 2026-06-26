import React from "react";

function Pages(){
    return (
      <div className="flex gap-1 self-start my-6">
        <button className="text-red-400 border-2 px-3 py-2 hover:text-white hover:bg-red-400">1</button>
        <button className="text-red-400 border-2 px-3 py-2 hover:text-white hover:bg-red-400">2</button>
        <button className="text-red-400 border-2 px-3 py-2 hover:text-white hover:bg-red-400">→</button>
      </div>
    );
}

export default Pages;
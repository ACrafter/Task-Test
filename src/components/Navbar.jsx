import React,{useState} from "react";

function Navbar() {

  const [hidden, sethidden] = useState(true);
  
  return(
    <nav className= "bg-white fixed z-50 border-b-2 border-black-500 w-screen h-12 shadow-sm flex flex-wrap content-center">

<button onClick={()=>sethidden(!hidden)} className="cursor-pointer flex flex-wrap content-center">
    <div className="block h-8 w-8 sm:ml-4 rounded-full overflow-hidden border-2 border-gray-300 hover:outline-none hover:border-yellow-500">
      <img className="h-full w-full object-cover"src="https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png" />
    </div>



    <div hidden={hidden} className="absolute mt-10 -left-0 bg-white border-2 rounded-lg w-32 py-2 shadow-md rounded-t-none">
    <form onSubmit={(e)=>{alert("Logged Out")}}>
      <a href="#" className = "block px-4 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white w-full">My Profile</a>
      <a href="#" className = "block px-4 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white w-full">Settings</a>
      <button type="submit" className = "block px-4 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white w-full">Logout</button>
    </form>
    </div>

</button>
    </nav>
  )
}

export default Navbar

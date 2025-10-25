import "./App.css";
import ProfileComponent from "./components/ProfileComponent";

function App() {
  return (
    <>
          <div className="flex gap-5">
      <ProfileComponent
        image={
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
        }
        name={"Emily Chin"}
        discription={
          "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus inventore facere autem odit! Aliquid"
        }
 />

  <ProfileComponent
        image={
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
        }
        name={"Michael Lee"}
        discription={
          "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus inventore facere autem odit! Aliquid"
        }
        />


  <ProfileComponent
        image={
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
        }
        name={"Sarah Davis"}
        discription={
          "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus inventore facere autem odit! Aliquid"
        }
 />
        </div>
    </>
  );
}

export default App;

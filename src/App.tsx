import "./App.css";
import ProfileComponent from "./components/ProfileComponent";
import type { UserType } from "./components/types/userType";

function App() {
  const user: UserType[] = [
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      name: "Emily Chin",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus inventore facere autem odit! Aliquid",
      views: 1.6,
      comments: 12,
    },
    {
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      name: "Michael Lee",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus inventore facere autem odit! Aliquid",
      views: 2.8,
      comments: 23,
    },
    {
      image:
        "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      name: "Sarah Davis",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus inventore facere autem odit! Aliquid",
      views: 9.9,
      comments: 12,
    },
  ];

  return (
    <>
      <div className="flex gap-5">
        <ProfileComponent user = { user[0]} />
        <ProfileComponent user = { user[1]} />
        <ProfileComponent user = { user[2]} />
      </div>
    </>
  );
}

export default App;

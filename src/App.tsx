import { useState } from "react";
import "./App.css";
import ProfileComponent from "./components/ProfileComponent";
import type { UserType } from "./components/types/userType";

const usersArray: UserType[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    name: "Emily Chin",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus inventore facere autem odit! Aliquid",
    views: 1.6,
    comments: 12,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    name: "Michael Lee",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus inventore facere autem odit! Aliquid",
    views: 2.8,
    comments: 23,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    name: "Sarah Davis",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus inventore facere autem odit! Aliquid",
    views: 9.9,
    comments: 12,
  },
];

function App() {
  const [users, setUsers] = useState<UserType[]>(usersArray);

  function addUser(newUser: UserType): void {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  const newUser: UserType = {
    id: users.length + 1,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    name: "New User",
    description:
      "This is a new user added dynamically to the list.This is a new user added dynamically to the list.",
    views: 3.5,
    comments: 45,
  };

  function addUserAtBegining(newUser1: UserType): void {
    setUsers((prevUsers) => [newUser1, ...prevUsers]);
  }

  const newUser1: UserType = {
    id: users.length + 1,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    name: "New User",
    description:
      "This is a new user added dynamically to the list.This is a new user added dynamically to the list.",
    views: 3.5,
    comments: 45,
  };
  function removeLastUser(): void {
    setUsers((prevUsers) => prevUsers.slice(0, -1));
  }

  function removeFirstUser(): void {
    setUsers((prevUsers) => prevUsers.slice(1));
  }
  return (
    <>
      <div className="flex gap-2 ">
        {users.map((user) => (
          <ProfileComponent key={user.id} users={user} />
        ))}
      </div>

      <button
        onClick={() => addUser(newUser)}
        className="bg-blue-600 text-white px-6 py-2 rounded mt-5 ml-3"
      >
        Add The End
      </button>
      <button
        onClick={() => addUserAtBegining(newUser1)}
        className="bg-blue-600 text-white px-6 py-2 rounded mt-5 ml-3"
      >
        Add in Begining
      </button>
      <button
        onClick={() => removeLastUser()}
        className="bg-blue-600 text-white px-6 py-2 rounded mt-5 ml-3"
      >
        Remove End
      </button>
      <button
        onClick={() => removeFirstUser()}
        className="bg-blue-600 text-white px-6 py-2 rounded mt-5 ml-3"
      >
        Remove Begining
      </button>
    </>
  );
}

export default App;

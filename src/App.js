import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import UserCard from "./components/UserCard";
import { useEffect, useState } from "react";
import axios from "axios";
import FormUser from "./components/FormUser";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setData(response.data.users);
        console.log(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container>
        <div className="text-xl font-bold uppercase mt-3">users</div>
        <div className="w-full bg-white flex items-center justify-center py-3 rounded mt-3 font-bold cursor-pointer border uppercase text-blue-700">
          Add a new user +
        </div>
        <FormUser />
        <div className="flex flex-wrap justify-between">
          {Array.isArray(data) && data.length > 0 ? (
            data
              .slice(0, 20)
              .map(({ id, firstName, lastName, image, email, phone }) => (
                <UserCard
                  key={id}
                  name={{ firstName, lastName }}
                  avatar={image}
                  email={email}
                  phone={phone}
                />
              ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Container>
    </>
  );
}

export default App;

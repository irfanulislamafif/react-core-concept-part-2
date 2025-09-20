import Counter from "./counter";
import "./App.css";
import Batsman from "./batsman";
import Users from "./users";
import { Suspense } from "react";
import Posts from "./posts";
import { Friends } from "./friends";
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
function App() {
  const postsPromise = fetchPosts();

  const friendsPromise = fetchFriends();
  function handleClick() {
    alert("Iam clicked");
  }

  const handleClick3 = () => {
    alert("clicked 3");
  };
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h4>Posts are coming........</h4>}>
        <Posts postPromise={postsPromise}></Posts>
      </Suspense>
      <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      <Batsman></Batsman>
      <Counter />

      <button>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <br></br>
      <button onClick={handleClick3}>Click 3</button>
      <button onClick={() => alert("click 4")}>Click 4</button>
      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App;

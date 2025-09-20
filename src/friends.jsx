import { use } from "react";
import Friend from "./friend";

export function Friends({ friendsPromise }) {
  const friends = use(friendsPromise);
  return (
    <div className="borderCard">
      <h3>Friends:{friends.length}</h3>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}

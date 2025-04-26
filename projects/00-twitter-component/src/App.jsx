import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "mrstone",
    name: "Mark Stone",
    isFollowing: true,
  },
  {
    userName: "zoeyh",
    name: "Zoey H.",
    isFollowing: false,
  },
  {
    userName: "kathM",
    name: "Kath May",
    isFollowing: true,
  },
  {
    userName: "TMChar",
    name: "Thomas C.",
    isFollowing: false,
  },
];

export default function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import { UserProfile } from "./types/useprofile";
import axios from "axios";
import { User } from "./types/api/user";

function App() {
  const [userPrifiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFetchUser = () => {
     setLoading(true);
     setError(false);

     axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
           id: user.id,
           name: `${user.name}(${user.username})`,
           email: user.email,
           address: `${user.address.city}${user.address.suite}${user.address.street}`,
         }));
         setUserProfiles(data);
       })
       .catch(() => {
         setError(true);
       })
       .finally(() => {
         setLoading(false);
       });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データを取得できませんでした。</p>
      ) : loading ? (
        <p>ロード中です。</p>
      ) : (
        <>
          {userPrifiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;

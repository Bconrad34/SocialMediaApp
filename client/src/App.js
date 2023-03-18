import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(res => res.json()).then(data => { setBackendData(data) });
  }, []);

  return (
    <div>
      {(backendData.users === undefined) ?  (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => {
          return <p key={i}>{user}</p>
        })
      )}
    </div>
  );
}

export default App;

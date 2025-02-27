import {useState} from 'react';

const User = () => {
    const [Count] = useState(0);
    const [Count2] = useState(1);
         return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
        <h1 >Count : {Count}</h1>
      <h1 >Count2 : {Count2}</h1>
      <h2>Shailendra Sharma</h2>
      <h3>Location : Ahemdabad</h3>
      <h3>Instagram : shailendra_sharma</h3>
    </div>
  );
}

export default User;
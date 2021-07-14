import React, { useState, useEffect } from "react";

function User() {
  const [usersList, setUsers] = useState([]);
  const [userInfo, setInfo] = useState({
    name: "",
    job: "",
  });

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setUsers(result.data);
        console.log(usersList);
      });
  }, []);

  const handleInputChange = (e) => {
    setInfo({ ...userInfo, [e.target.name]: e.target.value });
    // console.log(userInfo);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // fetch("url",{method,headers,body})
    //fetch
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userInfo),
    };
    fetch("https://reqres.in/api/users", options)
      .then((res) => {
        console.log(res.json());
      })
      .catch((errMsg) => {
        console.log(errMsg);
      });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={userInfo.name}
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          value={userInfo.job}
          name="job"
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>Create User</button>
        <div className="container">
          <div className="row">
            {usersList.map((user, id) => (
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={id}>
                <img src={user.avatar} alt="" />
                <p>{user.email}</p>
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default User;

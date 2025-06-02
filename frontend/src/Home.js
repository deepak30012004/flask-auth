import React from "react";

function Home() {
  const username = localStorage.getItem("username");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold text-green-700">
        Welcome, {username} 👋
      </h1>
    </div>
  );
}

export default Home;

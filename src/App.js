import "./App.css";
import "./Componens/posts/main.css";
import { Header } from "./Componens/header/header";
import { Sitebar } from "./Componens/sitebar/sitebar";
import { BlogContent } from "./Componens/posts/MainBlogPage";
import { LoginForm } from "./Componens/LoginForm/LoginForm";
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { NoString } from "./Componens/NoString/NoString";
import { SeparatPostPage } from "./Componens/posts/SeparatPostPage";

function App() {
  const [LogIsCount, SetLogIsCount] = useState(() => {
    if (localStorage.getItem("setLocalServer") === "true") return true;
    return false;
  });

  const [user, setUser] = useState(localStorage.getItem("setName"));

  return (
    <div className="App">
      <Header SetLogIsCount={SetLogIsCount} LogIsCount={LogIsCount} />
      <Sitebar LogIsCount={LogIsCount} user={user} />
      <div className="main">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={LogIsCount ? <Navigate to="/blog" /> : <Navigate to="/login" />}
            />
            <Route
              path="/blog/:postId"
              element={LogIsCount ? <SeparatPostPage /> : <Navigate to="/login" />}
            />
            <Route path="/blog" element={LogIsCount ? <BlogContent /> : <Navigate to="/login" />} />
            <Route
              path="/login"
              element={
                LogIsCount ? (
                  <Navigate to="/blog" />
                ) : (
                  <LoginForm SetLogIsCount={SetLogIsCount} setUser={setUser} />
                )
              }
            />
            <Route path="*" element={<NoString />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

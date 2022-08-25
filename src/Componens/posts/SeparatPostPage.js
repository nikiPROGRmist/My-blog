import React, { useEffect, useState } from "react";
import "././content-posts.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SeparatPostPage = ({
  pos,
  liked,
  deletePosts,
  handleEditPostForm,
  editPostsForms,
  link,
}) => {
  const { postId } = useParams();
  console.log(postId);
  const [post, setPost] = useState();

  useEffect(() => {
    if (postId) {
      axios.get(`https://629c8ce4e9358232f75cbd6c.mockapi.io/posts/${postId}`).then((response) => {
        setPost(response.data);
      });
    }
  }, [postId, setPost]);

  const likePos = post?.liked ? "crimson" : "white";

  return (
    <div className="content__menu">
      <div className="posts__title"> {post?.title}</div>
      <div className="content__description">{post?.description}</div>

      <div className="content__footer">
        <ul className="content__time">
          <li className="content__li">
            <button
              className="button__fill"
              onClick={pos}
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <FavoriteIcon style={{ fill: likePos }} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

import "./content-posts.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export const SeparatePosts = ({
  title,
  description,
  pos,
  liked,
  deletePosts,
  handleEditPostForm,
  editPostsForms,
  link,
}) => {
  const likePos = liked ? "crimson" : "white";
  const hadleForm = () => {
    editPostsForms();
    handleEditPostForm();
  };

  const custonDescription =
    description.length > 500 ? <>{description.slice(0, 201)}...</> : description;

  return (
    <div className="content__menu">
      <div className="posts__title"> {title}</div>
      <div className="content__description">{custonDescription}</div>

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

            <button className="dell-btn">
              {description.length > 500 ? <div className="link__btn">{link}</div> : null}
              <div className="btn-1">
                <ModeEditIcon
                  onClick={hadleForm}
                  style={{ fontSize: "24px", backgroundColor: "transparent", fill: "white" }}
                />
              </div>
              <div className="btn-2">
                <DeleteIcon
                  style={{ fontSize: "24px", backgroundColor: "transparent", fill: "white" }}
                  onClick={deletePosts}
                />
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

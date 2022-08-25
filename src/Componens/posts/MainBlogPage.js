// import { posts } from "./PostsCard"
import React, { Component } from "react";
import { SeparatePosts } from "./SeparatePosts";
import { AddForm } from "../addForm/AddForm";
import axios from "axios";
import { EditPostForm } from "../editForm/EditPostForm";
import { Storis } from "../Storis/Storis";
import { Link } from "react-router-dom";

export class BlogContent extends Component {
  state = {
    ShouBlog: false,
    PostOverloy: false,
    liked: [],
    editPostForm: false,
    editForm: {},
  };

  editPostsForms = (BlogPosts) => {
    this.setState({
      editForm: BlogPosts,
    });
  };

  like = (post) => {
    const temp = { ...post };
    temp.liked = !temp.liked;

    axios
      .put(`https://629c8ce4e9358232f75cbd6c.mockapi.io/posts/${post.id}`, temp)
      .then((respone) => {
        console.log("обновился", respone.data);
        axios.get("https://629c8ce4e9358232f75cbd6c.mockapi.io/posts").then((response) => {
          this.setState({
            liked: response.data,
          });
        });
      });
  };

  handleForm = (posts) => {
    axios.post("https://629c8ce4e9358232f75cbd6c.mockapi.io/posts", posts).then((response) => {
      console.log("отправился на сервер", response);

      axios.get("https://629c8ce4e9358232f75cbd6c.mockapi.io/posts").then((response) => {
        this.setState({
          liked: response.data,
        });
      });
    });
  };

  deletePosts = (post) => {
    if (window.confirm(`Вы уверены что хотите удалить пост ?`)) {
      axios
        .delete(`https://629c8ce4e9358232f75cbd6c.mockapi.io/posts/${post}`)
        .then((response) => {
          console.log("пост удален", response.data);
          axios.get("https://629c8ce4e9358232f75cbd6c.mockapi.io/posts").then((response) => {
            this.setState({
              liked: response.data,
            });
          });
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  editGetserverForm = (post) => {
    axios
      .put(`https://629c8ce4e9358232f75cbd6c.mockapi.io/posts/${post.id}`, post)

      .then((respone) => {
        console.log("обновился", respone.data);

        axios.get("https://629c8ce4e9358232f75cbd6c.mockapi.io/posts").then((response) => {
          this.setState({
            liked: response.data,
          });
        });
      });
  };

  handleEditPostForm = () => {
    this.setState({
      editPostForm: true,
    });
  };

  hideEditPostForm = () => {
    this.setState({
      editPostForm: false,
    });
  };

  handlePosts = () => {
    this.setState({
      PostOverloy: true,
    });
  };
  hidePosts = () => {
    this.setState({
      PostOverloy: false,
    });
  };

  componentDidMount() {
    axios.get("https://629c8ce4e9358232f75cbd6c.mockapi.io/posts").then((response) => {
      this.setState({
        liked: response.data,
      });
    });
    window.addEventListener("keyup", (event) => {
      if (event.key === "Escape" && this.state.PostOverloy) this.hidePosts();
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.hidePosts());
  }

  render() {
    const BlogPosts = this.state.liked.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <SeparatePosts
            title={item.title}
            description={item.description}
            liked={item.liked}
            pos={() => {
              this.like(item);
            }}
            deletePosts={() => {
              this.deletePosts(item.id);
            }}
            handleEditPostForm={() => {
              this.handleEditPostForm(item);
            }}
            editPostsForms={() => {
              this.editPostsForms(item);
            }}
            link={
              <>
                <Link className="link" to={`/blog/${item.id}`}>
                  читать
                </Link>
              </>
            }
          />
        </React.Fragment>
      );
    });
    return (
      <>
        <Storis />

        <div className="postButton">
          <button onClick={this.handlePosts} className="postBtn">
            Создать новый пост
          </button>
        </div>

        {BlogPosts}

        {this.state.PostOverloy && (
          <AddForm
            liked={this.state.liked}
            handleForm={this.handleForm}
            hidePosts={this.hidePosts}
          />
        )}

        {this.state.editPostForm && (
          <EditPostForm
            hideEditPostForm={this.hideEditPostForm}
            editForm={this.state.editForm}
            editGetserverForm={this.editGetserverForm}
          />
        )}
      </>
    );
  }
}

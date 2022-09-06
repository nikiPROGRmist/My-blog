import React, { Component } from "react";
import "../addForm/addForm.css";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

export class AddForm extends Component {
  state = {
    inputTitle: "",
    inputDescriptin: "",
  };

  handleClickForm = (e) => {
    e.preventDefault();
    const handlePosts = {
      id: this.props.liked.length + 1,
      title: this.state.inputTitle,
      description: this.state.inputDescriptin,
      liked: false,
    };

    this.props.handleForm(handlePosts);
    this.props.hidePosts();
  };

  // componentDidMount() {
  //   console.log('отрисовался')
  // }

  // componentDidUpdate() {
  //   console.log("обновился ")
  // }

  // componentWillUnmount() {
  //   console.log('удалился')
  // }

  componentDidUpdate() {
    window.addEventListener("keydown", (event) => {
      if (event.code === "Escape") this.props.hidePosts();
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.props.hidePosts());
  }

  onchangeTitle = (event) => {
    this.setState({
      inputTitle: event.target.value,
    });
  };

  onchangeDescription = (event) => {
    this.setState({
      inputDescriptin: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div onClick={this.props.hidePosts} className="overlay"></div>
        <form onSubmit={this.handleClickForm} action="form" className="form__icone">
          <button className="close__btn" onClick={this.props.hidePosts}>
            <CloseTwoToneIcon style={{ fill: "white" }} />
          </button>
          <div className="form-h1">
            <h1>Cоздание поста</h1>
          </div>
          <div className="input__form">
            <input
              wrap="soft"
              required
              value={this.state.inputTitle}
              type="text"
              onChange={this.onchangeTitle}
              placeholder="Заголовок поста"
            />
          </div>
          <div className="textarea__form">
            <textarea
              className="scroll"
              wrap="soft"
              required
              value={this.state.inputDescriptin}
              onChange={this.onchangeDescription}
              placeholder="Описание поста"
            ></textarea>
          </div>
          <div className="form__btn">
            <button>Создать пост</button>
          </div>
        </form>
      </>
    );
  }
}

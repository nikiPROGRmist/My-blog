import React, { Component } from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

export class EditPostForm extends Component {
  state = {
    editFormTitle: this.props.editForm.title,
    editFormDescription: this.props.editForm.description,
  };

  editPostFormTitle = (e) => {
    this.setState({
      editFormTitle: e.target.value,
    });
  };

  editPostFormDescription = (e) => {
    this.setState({
      editFormDescription: e.target.value,
    });
  };

  saveForm = (e) => {
    e.preventDefault();
    const handlePosts = {
      id: this.props.editForm.id,
      title: this.state.editFormTitle,
      description: this.state.editFormDescription,
      liked: this.props.editForm.liked,
    };

    this.props.editGetserverForm(handlePosts);
    this.props.hideEditPostForm();
  };

  componentDidUpdate() {
    window.addEventListener("keydown", (event) => {
      if (event.code === "Escape") this.props.hideEditPostForm();
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.props.hideEditPostForm());
  }

  render() {
    return (
      <>
        <div onClick={this.props.hideEditPostForm} className="overlay"></div>
        <form action="form" className="form__icone" onSubmit={this.saveForm}>
          <button className="close__btn" onClick={this.props.hideEditPostForm}>
            <CloseTwoToneIcon style={{ fill: "white" }} />
          </button>
          <div className="form-h1">
            <h1>Редактировать пост</h1>
          </div>
          <div className="input__form">
            <input
              wrap="off"
              value={this.state.editFormTitle}
              onChange={this.editPostFormTitle}
              required
              type="text"
              placeholder="Заголовок поста"
            />
          </div>
          <div className="textarea__form">
            <textarea
              className="scroll"
              onChange={this.editPostFormDescription}
              required
              value={this.state.editFormDescription}
              placeholder="Описание поста"
            ></textarea>
          </div>
          <div className="form__btn">
            <button>Сохранить </button>
          </div>
        </form>
      </>
    );
  }
}

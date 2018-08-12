import * as React from "react";
import "./App.css";
import { BookInfo } from "./BookInfo";
import { BooksList, IBooksItem } from "./BooksList";

class App extends React.Component {
  public state = {
    query: ""
  };

  private inputRef = React.createRef<HTMLInputElement>();

  public render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input ref={this.inputRef} />
          <button>Search</button>
        </form>
        <BooksList q={this.state.query} renderBook={this.renderBook} />
        <hr />
        <BookInfo id="-0BTDAAAQBAJ" />
      </div>
    );
  }

  private handleSubmit = (e: any) => {
    e.preventDefault();
    this.setState({
      query: this.getInputValue()
    });
  };

  private renderBook({ title, id }: IBooksItem) {
    return <BookInfo id={id} />;
    return (
      <div key={id}>
        {id}:{title}
      </div>
    );
  }

  private getInputValue() {
    if (!this.inputRef.current || !this.inputRef.current.value) {
      return "";
    }

    return this.inputRef.current.value;
  }
}

export default App;

import * as React from "react";

export interface ISearchFormProps {
  value?: string;
  onSubmit: (value: string) => void;
}

interface ISearchFormState {
  lastPropsValue: string;
  value: string;
}

export default class SearchForm extends React.Component<
  ISearchFormProps,
  ISearchFormState
> {
  public static defaultProps = {
    value: ""
  };

  public static getDerivedStateFromProps(
    props: ISearchFormProps,
    state: ISearchFormState
  ) {
    if (state.lastPropsValue !== props.value) {
      const value = props.value;
      return {
        lastPropsValue: value,
        value
      };
    }

    return null;
  }

  public state = {
    lastPropsValue: "",
    value: ""
  };

  public render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input value={this.state.value} onChange={this.handleInputChange} />
        <button>Поиск</button>
      </form>
    );
  }

  private handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      value: e.currentTarget.value
    });
  };

  private handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { value } = this.state;

    if (!value) {
      return;
    }

    this.props.onSubmit(value);
  };
}

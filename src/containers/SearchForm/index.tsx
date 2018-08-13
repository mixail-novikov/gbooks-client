import * as qs from "query-string";
import { withRouter } from "react-router-dom";
import { compose, withProps } from "recompose";
import SearchFrom, { ISearchFormProps } from "../../components/SearchForm";

interface ISearchFormPropsEnhanced
  extends Pick<ISearchFormProps, Exclude<keyof ISearchFormProps, "onSubmit">> {
  onSubmit?: ISearchFormProps["onSubmit"];
}

export default compose<ISearchFormProps, ISearchFormPropsEnhanced>(
  withRouter,
  withProps(({ history, onSubmit }) => ({
    onSubmit: onSubmit
      ? onSubmit
      : (value: string) => history.push(`/search?${qs.stringify({ q: value })}`)
  }))
)(SearchFrom);

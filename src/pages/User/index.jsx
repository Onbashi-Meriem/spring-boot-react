/* eslint-disable react/prop-types */
import { Component } from "react";
import { getUser } from "./api.js";
import { Alert } from "@/shared/components/Alert";
import Spinner from "@/shared/components/Spinner";

// mit Class component für Beispiel

export class UserClass extends Component {
  state = {
    user: null,
    apiProgress: false,
    errorMessage: "",
  };
  async componentDidMount() {
    this.setState({ apiProgress: true });
    try {
      const response = await getUser(this.props.id);
      this.setState({ user: response.data });
    } catch (error) {
      this.setState({ errorMessage: error.response.data.message });
    } finally {
      this.setState({ apiProgress: false });
    }
  }
  render() {
    return (
      <>
        <div> user id : {this.props.id}</div>
        {this.state.apiProgress && (
          <Alert styleType="secondary" center>
            <Spinner></Spinner>
          </Alert>
        )}
        {this.state.user && <div> {this.state.user.username}</div>}
        {this.state.errorMessage && (
          <Alert styleType="danger">{this.state.errorMessage}</Alert>
        )}
      </>
    );
  }
}

import { useParams } from "react-router-dom";
export function User() {
  let { id } = useParams();
  return (
    <>
      <UserClass id={id} />
    </>
  );
}

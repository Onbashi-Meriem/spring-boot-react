/* eslint-disable react/prop-types */
import { Alert } from "@/shared/components/Alert";
import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
import { updateUser } from "./api";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useAuthState, useAuthDispatch } from "@/shared/state/context";

export function UserEditForm({ setEditMode }) {
  const authState = useAuthState();
  const [newUserName, setNewUserName] = useState(authState.username);
  const onChangeUserName = (event) => {
    setNewUserName(event.target.value);
    setErrors({});
  };
  const dispatch = useAuthDispatch();
  const { t } = useTranslation();

  const onClickCancel = () => {
    setNewUserName(authState.username);
    setEditMode(false);
  };

  const [apiProgress, setApiProgress] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setApiProgress(true);
    setErrors({});
    setGeneralError();
    try {
      await updateUser(authState.id, { username: newUserName });
      dispatch({
        type: "user-update-success",
        data: { username: newUserName },
      });

      setEditMode(false);
    } catch (axiosError) {
      if (axiosError.response?.data) {
        if (axiosError.response.data.status === 400) {
          setErrors(axiosError.response.data.validationErrors);
        } else {
          setGeneralError(axiosError.response.data.message);
        }
      } else {
        setGeneralError(t("genericError"));
      }
    } finally {
      setApiProgress(false);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Input
        id="username"
        label={t("username")}
        defaultValue={authState.username}
        onChange={onChangeUserName}
        error={errors.username}
      ></Input>
      {generalError && <Alert styleType="danger">{generalError}</Alert>}
      <Button apiProgress={apiProgress} type="submit">
        Save
      </Button>
      <div className="d-inline m-1"></div>
      <Button styleType="outline-secondary" onClick={onClickCancel}>
        Cancel
      </Button>
    </form>
  );
}

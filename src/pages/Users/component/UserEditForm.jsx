/* eslint-disable react/prop-types */
import { Alert } from "@/shared/components/Alert";
import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
import { updateUser } from "./api";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useAuthState, useAuthDispatch } from "@/shared/state/context";

export function UserEditForm({ setEditMode, setTempImage }) {
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
    setNewImage();
    setTempImage();
  };

  const [apiProgress, setApiProgress] = useState(false);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();
  const [newImage, setNewImage] = useState();

  const onSelectImage = (event) => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        image: undefined,
      };
    });
    if (event.target.files.length < 1) return;
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const data = fileReader.result;
      setNewImage(data);
      setTempImage(data);
    };
    fileReader.readAsDataURL(file);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setApiProgress(true);
    setErrors({});
    setGeneralError();
    try {
      const { data } = await updateUser(authState.id, {
        username: newUserName,
        image: newImage,
      });
      dispatch({
        type: "user-update-success",
        data: { username: data.username, image: data.image },
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
      <Input
        label="Profile Image"
        type="file"
        onChange={onSelectImage}
        error={errors.image}
      />
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

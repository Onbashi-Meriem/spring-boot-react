import { useCallback, useEffect, useState } from "react";
import { getAllUser } from "./api";
import Spinner from "@/shared/components/Spinner";
import { UserListItem } from "./component/UserListItem";

export function Users() {
  const [apiProgress, setApiProgress] = useState(false);

  const [errorMessage, setErrorMessage] = useState();
  const [users, setUsers] = useState({
    content: [],
    last: false,
    first: false,
    number: 0,
  });

  const loadUsers = useCallback(async (page) => {
    setApiProgress(true);
    try {
      const response = await getAllUser(page);
      setUsers(response.data);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    } finally {
      setApiProgress(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-header text-center fs-4">User List</div>
        <ul className="list-group list-group-flush">
          {users.content.map((user) => {
            return <UserListItem user={user} key={user.id} />;
          })}
        </ul>
        <div className="card-footer text-center">
          {!apiProgress && !users.first && (
            <button
              className="btn btn-outline-secondary btn-sm float-start"
              onClick={() => {
                loadUsers(users.number - 1);
              }}
            >
              Previous
            </button>
          )}

          {apiProgress && <Spinner></Spinner>}

          {!apiProgress && !users.last && (
            <button
              className="btn btn-outline-secondary btn-sm float-end"
              onClick={() => {
                loadUsers(users.number + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

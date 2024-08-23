/* eslint-disable react/prop-types */
import { ProfileImage } from "@/shared/components/ProfileImage";
import { Link } from "react-router-dom";

export function UserListItem({ user }) {
  // const [selected, setSelected] = useState(false);
  return (
    <>
      <Link
        className="list-group-item list-group-item-action"
        to={`/users/${user.id}`}
        style={{ textDecoration: "none" }}
      >
        <ProfileImage width={30} />
        <span className="ms-2">{user.username}</span>
      </Link>
    </>
  );
}

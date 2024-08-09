/* eslint-disable react/prop-types */
import defaultProfileImage from "@/assets/profile.png";
export function UserListItem({ user }) {
  // const [selected, setSelected] = useState(false);
  return (
    <>
      <li className="list-group-item list-group-item-action" key={user.id}>
        <img
          src={defaultProfileImage}
          width={30}
          className="img-fluid rounded-circle shadow-sm"
        />
        <span className="ms-2">{user.username}</span>
      </li>
    </>
  );
}

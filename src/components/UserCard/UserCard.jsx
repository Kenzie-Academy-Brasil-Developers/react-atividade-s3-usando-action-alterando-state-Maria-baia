import { useDispatch, useSelector } from "react-redux";
import {changeName} from "../../store/modules/user/actions";
import { useState } from "react";

const UserCard = () => {
    const names = useSelector((state) => state.user.name);
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeName(name));
    }

    return(
        <div>
            <h1>User name: {names}</h1>
            <input onChange={(event) =>
            setName(event.target.value)}/>
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default UserCard
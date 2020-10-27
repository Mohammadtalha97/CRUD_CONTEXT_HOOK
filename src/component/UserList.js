import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

import { GlobalContext } from "../context/GlobalState";

export const UserList = () => {
  const { usersData, removeUser } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {usersData.length > 0 ? (
        <>
          {usersData.map((user) => (
            <ListGroupItem key={user.id} className="d-flex">
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <Button onClick={() => removeUser(user.id)} color="danger">
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No User</h4>
      )}
    </ListGroup>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import { GlobalContext } from "../context/GlobalState";

export const EditUser = (props) => {
  const { usersData, editUser } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const exisitingUserData = usersData.find((user) => user.id === userId);
    setSelectedUser(exisitingUserData);
  }, [currentUserId, usersData]);

  const onchange = (e) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    editUser(selectedUser);
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={selectedUser.name}
          onChange={onchange}
          placeholder="Enter Name"
        ></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

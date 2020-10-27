import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid4 } from "uuid";
export const AddUser = () => {
  const { addUser } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const history = useHistory();

  const onSubmit = () => {
    const newUser = {
      id: uuid4(),
      name: name,
    };
    addUser(newUser);

    history.push("/");
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          placeholder="Enter Name"
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

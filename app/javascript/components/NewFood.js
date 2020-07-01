import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const NewFood = () => {
  const [foods, setFoods] = useState([]);
  const [success, setSuccess] = useState(false)
  const [form, setState] = useState({
    name: "",
    ingredients: "",
    description: "",
    available_time: "",
    image_url: "",
    box: "",
  });
 

  const handleChange = (e) => {
    setState({
      //take all the existing form data and,...
      ...form,
      //...add new data to the end as it is typed
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(success)
    // keeps react from refreshing the page unnessarily
    e.preventDefault();
    // show the current state in the console (should see all foods created)
    console.log(form);
    // set the foods' state to include all foods
    // since the current cat state is immutable, we need to create a copy of it and add the new cat to it
    setFoods((foods) => [...foods, form]);
    // // send all foods in the state to the backend to post to the database
    pushFoods(form)
    setSuccess(true)
  };
  const pushFoods = (freshFood) => {
    // fetch URL to post new state of `foods` to database
    return fetch("http://localhost:3000/foods", {
      body: JSON.stringify(freshCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(res => {
      if(res.ok) {
        console.log('You did it!')
      }
    })
    // add error catching
    // add success function
  }

  return (
    <>
      <Form>
      <Row form>
        <Col md={6}>
        <FormGroup>
          <Label htmlFor="name" id="name">
            Food Title
          </Label>
          <Input
            type="text"
            name="name"
            onChange={ handleChange }
            value={form.name}
          />
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
          <Label htmlFor="ingredients" id="ingredients">
            Ingredients
          </Label>
          <Input
            type="textarea"
            name="ingredients"
            onChange={ handleChange }
            value={form.ingredients}
          />
        </FormGroup>
        </Col>
        </Row>
        <FormGroup>
          <Label htmlFor="description" id="description">
            Description
          </Label>
          <Input
            type="textarea"
            name="description"
            onChange={ handleChange }
            value={form.description}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="available_time" id="available_time">
            Available Times
          </Label>
          <Input
            type="text"
            name="available_time"
            onChange={ handleChange }
            value={form.available_time}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="image" id="image">Image URL</Label>
          <Input type="url" name="image" placeholder="" onChange={ handleChange } value={ form.image }/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="box" id="box">
            Box
          </Label>
          <Input
            type="text"
            name="box"
            onChange={ handleChange }
            value={form.box}
          />
        </FormGroup>
        <Button color="info" onClick={ handleSubmit } id="submit">
          Submit
        </Button>
        { success && <Redirect to="/"/> }
      </Form>
    </>
  );
};

export default NewFood;
import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import map from '../images/Gmas_kitchen_map_img.png'

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
      body: JSON.stringify(freshFood),
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
    <div className='container'>
    <div className='form-flt-left col-6'>
      <Form>
        <FormGroup>
          <Label htmlFor="name" id="name">
          </Label>
          <Input
            type="text"
            name="name"
            onChange={ handleChange }
            value={form.name}
            placeholder="Food Title"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="ingredients" id="ingredients">
          </Label>
          <Input
            type="textarea"
            name="ingredients"
            onChange={ handleChange }
            value={form.ingredients}
            placeholder="Ingredients"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description" id="description">
          </Label>
          <Input
            type="textarea"
            name="description"
            onChange={ handleChange }
            value={form.description}
            placeholder="Description"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="available_time" id="available_time">
          </Label>
          <Input
            type="text"
            name="available_time"
            onChange={ handleChange }
            value={form.available_time}
            placeholder="Available Drop-off Times"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="image" id="image"></Label>
          <Input type="url" name="image" placeholder="Image URL" onChange={ handleChange } value={ form.image }/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="box" id="box">
          </Label>
          <Input
            type="text"
            name="box"
            onChange={ handleChange }
            value={form.box}
            placeholder="Box No."
          />
        </FormGroup>
        <Button className="btn2" onClick={ handleSubmit } id="submit">
          Submit
        </Button>
        { success && <Redirect to="/"/> }
      </Form>
      </div>
    <div className="float-left spacer col-6">
      <img className="map_img" src={map}/>
    </div>
    </div>
    </>
  );
};

export default NewFood;
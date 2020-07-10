import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import List from "./List"
import FoodMap from "./FoodMap"

const NewFood = () => {
  const [foods, setFoods] = useState([]);
  const [success, setSuccess] = useState(false)
  const [form, setState] = useState({
    name: "",
    ingredients: "",
    note: "",
    time: "",
    image: "",
   
  });

  useEffect(() => {
    // Update the document title using the browser API
    try {
      fetch("https://floating-reaches-65868.herokuapp.com/foods")
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        setFoods(data)
      })
    } 
    catch(err){
      console.log(err);
    }
  }, []);

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
   
    // // send all foods in the state to the backend to post to the database
    pushFoods(form)
    setSuccess(true)
  };
  const pushFoods = (freshFood) => {
    // fetch URL to post new state of `foods` to database
    console.log(freshFood);
    return fetch("https://floating-reaches-65868.herokuapp.com/foods", {
      body: JSON.stringify(freshFood),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(data => {
      form.latitude = data.latitude;
      form.longitude = data.longitude;
      setFoods((foods) => [...foods, form]);
    });
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
          <Label htmlFor="note" id="note">
          </Label>
          <Input
            type="textarea"
            name="note"
            onChange={ handleChange }
            value={form.note}
            placeholder="Description"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="time" id="time">
          </Label>
          <Input
            type="text"
            name="time"
            onChange={ handleChange }
            value={form.time}
            placeholder="Available Drop-off Times"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="image" id="image"></Label>
          <Input type="url" name="image" placeholder="Image URL" onChange={ handleChange } value={ form.image }/>
        </FormGroup>
        {/* <FormGroup>
          <Label htmlFor="box_number" id="box_number">
          </Label>
          <Input
            type="text"
            name="box_number"
            onChange={ handleChange }
            value={form.box_number}
            placeholder="Box No."
          />
        </FormGroup> */}
        <Button className="btn2" onClick={ handleSubmit } id="submit">
          Submit
        </Button>
        { success && <Redirect to="/activelisting"/> }
      </Form>
      </div>
    <div className="float-left spacer col-6">
      {/* <List />
       */}
       <FoodMap foods={foods} center={[32.639954, -117.106705]} zoom={13} />
    </div>
    </div>
    </>
  );
};

export default NewFood;
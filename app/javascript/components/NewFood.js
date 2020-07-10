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
  
    try {
      fetch("/foods")
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
   
      ...form,
      
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(success)
    
    e.preventDefault();
   
    console.log(form);
    pushFoods(form)
  };
  const pushFoods = (freshFood) => {
    // fetch URL to post new state of `foods` to database
    console.log(freshFood);
    return fetch("/foods", {
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
      setFoods((foods) => [...foods, form], setSuccess(true));
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
     
        <Button className="btn2" onClick={ handleSubmit } id="submit">
          Submit
        </Button>
        { success && <Redirect to="/activelisting"/> }
      </Form>
      </div>
    <div className="float-left spacer col-6">
     
       <FoodMap foods={foods} center={[32.639954, -117.106705]} zoom={13} />
    </div>
    </div>
    </>
  );
};

export default NewFood;
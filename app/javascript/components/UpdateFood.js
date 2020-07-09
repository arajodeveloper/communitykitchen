import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useParams } from "react-router";
import { Redirect } from 'react-router-dom'

const UpdateFood = props => {
  let { foodId } = useParams();
  console.log('PLEASE')
  console.log(foodId);
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    note: "",
    time: "",
    image: ""
  });

  useEffect(() => {
    // Update the document title using the browser API
    try {
      fetch(`http://floating-reaches-65868.herokuapp.com/foods/${foodId}`)
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        let newForm = {
          name: data.name,
          ingredients: data.ingredients,
          note: data.note,
          time: data.time,
          image: data.image
        }
        setForm(newForm);
      })
    } 
    catch(err){
      console.log(err);
    }
  }, []);


  const handleChange = e => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  const updateFood = () => {
    return fetch(`http://floating-reaches-65868.herokuapp.com/foods/${foodId}`, {
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => {
      if (response.ok) setSuccess(true)
      else if (!response.ok) setError(true)
      else return response.json()
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    updateFood(form)
    console.log("form:",form)
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
          Update
        </Button>
        { success && <Redirect to="/activelisting"/> }
      </Form>
      </div>
    <div className="float-left spacer col-6">
      {/* <List />
       */}
       {/* <FoodMap foods={foods} center={[32.639954, -117.106705]} zoom={13} /> */}
    </div>
    </div>
  </>
  ) 
}
export default UpdateFood;
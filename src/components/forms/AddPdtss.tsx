"use client"
//working
import { getSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';



type category ={
    title:string,
    slug:string
}
const AddPdtss = () => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    price: 0,
    catSlug: '',
    isFeatured: false,
    userEmail: '', // Assuming user email is static
  });

  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    // Fetch categories from "localhost:3000/api/categories"
    fetch('http://localhost:3000/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));

    // Fetch user's email from session
    // Replace 'getAuthSession' with your actual function to get the session
    getSession().then(session => {
      if (session?.user?.email) {
        setFormData(prevFormData => ({
          ...prevFormData,
          userEmail: session.user.email!,
        }));
      }
    });
  }, []);

  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const submitForm = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Product added successfully:', data);
      } else {
        console.error('Product adding failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <label>Title:</label>
      <Input type="text" name="title" value={formData.title} onChange={handleInputChange} required />

      <label>Description:</label>
      <Input type="text" name="desc" value={formData.desc} onChange={handleInputChange} />

      <label>Price:</label>
      <Input type="number" name="price" value={formData.price} onChange={handleInputChange} required />

      <label>Category:</label>
      <select className='relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none   data-[disabled]:pointer-events-none data-[disabled]:opacity-50' name="catSlug" value={formData.catSlug} onChange={handleInputChange}>
        <option value="">Select Category</option>
        {categories.map((category:category) => (
          <option key={category.slug} value={category.slug}>
            {category.title}
          </option>
        ))}
      </select>

      <label>
        Is Featured:
        <Input className='w-5 h-5'
          type="checkbox"
          name="isFeatured"
          checked={formData.isFeatured}
          onChange={handleInputChange}
        />
      </label>

      {/* For demonstration purposes, assuming user email is static */}
      <input type="hidden" name="userEmail" value="user1@gmail.com" />

      <Button type="button" onClick={submitForm}>Submit</Button>
    </div>
  );
};

export default AddPdtss;

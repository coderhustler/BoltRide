'use client'
import { BookmarkRemoveOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import BookRideNavbar from './BookRideNavbar';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Button } from '@mui/material';
import AvailableCab from './AvailableCab';
import SearchResult from './SearchResult';

const validationSchema = Yup.object().shape({
  pickupLocation: Yup.string().required("Pickup location is required"),
  destinationLocation: Yup.string().required(
    "Destination location is required"
  ),
});

const BookRide=() => {

  const [activeField,setActiveField]=useState('');

  const handleOnSubmit =(values)=>{
    console.log(values)
  } 
  const formik = useFormik({
    initialValues: {
      pickupLocation: '',
    },
    validationSchema,
    onSubmit: values => {
      if(formik.isValid){
        handleOnSubmit(values)
      }
      
    },
  });

  const onFocused=(e)=>{
   const name=e.target.name
   setActiveField(name) 
  }

  return (
    <div className='w-full'>
      <BookRideNavbar/>

      <div className="px-3 lg:px-5 mt-10">
        <form className='space-y-5' onSubmit={formik.handleSubmit}>

        <div>
          <div className="border p-2 flex items-center relative">
            <p className="pr-3">From: </p>
            <input
              name="pickupLocation"
              placeholder="Enter Pickup Location"
              value={formik.values.pickupLocation}
              onChange={(event) => {
                const value = event.target.value;
                formik.setFieldValue("pickupLocation", value);
                // dispatch(searchLocation(value));
              }}
              onBlur={formik.handleBlur}
              className="border-none outline-none"
              onFocus={onFocused}
            />
            {activeField === "pickupLocation" && formik.values.pickupLocation &&  (
              <div className="">
                <SearchResult
                  setActiveField={setActiveField}
                  latitude_key={"pickup_lattitude"}
                  longitude_key={"pickup_longitude"}
                  area_key={"pickup_area"}
                />
              </div>
            )}
          </div>
          {formik.touched.pickupLocation && formik.errors.pickupLocation && (
            <div className="">
              <p className="text-xs text-red-500 px-2">
                {formik.errors.pickupLocation}
              </p>
            </div>
          )}
        </div>

        <div>
          <div className="border p-2 flex items-center relative">
            <p className="pr-3">To:</p>
            <input
              name="destinationLocation"
              placeholder="Enter Destination Location"
              value={formik.values.destinationLocation}
              onChange={(event) => {
                const value = event.target.value;
                formik.setFieldValue("destinationLocation", value);
                // dispatch(searchLocation(value));
              }}
              onBlur={formik.handleBlur}
              className="border-none outline-none"
              onFocus={onFocused}
            />
            {activeField === "destinationLocation" &&
              formik.values ?.destinationLocation.length>0 (
                <div className="">
                  <SearchResult
                    setActiveField={setActiveField}
                    latitude_key={"destination_lattitude"}
                    longitude_key={"destination_longitude"}
                    area_key={"destination_area"}
                  />
                </div>
              )}
          </div>

            {formik.touched.destinationLocation &&
              formik.errors.destinationLocation && (
              <div className="">
                <p className="text-xs text-red-500 px-2">
                  {" "}
                  {formik.errors.destinationLocation}
                </p>{" "}
              </div>
            )}
        </div>

        <Button
            className=""
            sx={{
              width: "100%",
              padding: ".7rem 0rem",
            }}
            variant="contained"
            color="secondary"
            type="submit"
     
          >
          Find Driver
        </Button>

        </form>
      </div>

      <div className='-z-10 px-2 lg:px-5 mt-5'>

        <p>Available Cars</p>

        <div className="space-y-5">
        <AvailableCab/>
        <AvailableCab/>
        <AvailableCab/>
        <AvailableCab/>
        <AvailableCab/>
        </div>
      </div>

    </div>
  );
}

export default BookRide;

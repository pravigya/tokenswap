/*
use useeffect hook to update a state in the page and show an alter after 5 seconds with the state value
*/
import React from "react";
import { useEffect, useState } from "react";

const [value, setValue] = useState(0);

useEffect(() => {
  setTimeout(() => {
    setValue("2");
    alert(setValue);
  }, 5000);
}, []);

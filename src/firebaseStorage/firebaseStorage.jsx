import React, {useEffect, useState, useRef} from "react";
import { storage } from "../Configuraciones/firebase";






export const handleFileChange = event => {
    console.log(event);
    const file= event.target.files[0];
    //const storageRef = storage.ref(`pictures/${file.name}`);
    //const task = storageRef.put(file)
   }

  
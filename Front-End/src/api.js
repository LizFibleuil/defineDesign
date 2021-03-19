import axios from 'axios';
import { apiUrl } from "./config";

/* Function to create a design */
export const createDesign = async (design) => {
    try {
      const response = await axios({
        url: `${apiUrl}/api/submitdefinitions`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: design,
      });
      if (response.statusText !== 'Created') {
        throw new Error(response.data.message);
      }
      return response.data;
    } catch (err) {
      console.log(err);
      return { error: err.response ? err.response.data.message : err.message };
    }
  };
/* Function to Get all designs */
export const getDesigns = async () => {
    try {
        const response = await axios({
            url: `${apiUrl}/api/submitdefinitions`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.statusText !== 'OK') {
            throw new Error(response.data.message);
        }
        return response.data;
    } catch (err) {
        console.log(err);
        return { error: err.response.data.message || err.message };
    }
};
/* Function to upload images */
export const uploadProductImage = async (formData) => {
  try {
    const response = await axios({
        url: `${apiUrl}/api/uploads`,
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data: formData,
    });
    if (response.statusText !== 'Created') {
        throw new Error(response.data.message);
    }
    return response.data;
} catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
}
};

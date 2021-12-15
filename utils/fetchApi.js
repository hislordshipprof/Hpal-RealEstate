import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com";
 

//function for fetching data frok the api
export const fetchApi=async (url)=>{
    const {data} = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "4d304ed5f5msh468179226e57eebp1ab438jsne8f5d7666b60",
      },
    });
    return data;
}
export {removemovie} from "../reducers/movieSlice";
import axios from "../../utils/axios";
import {loadmovie} from "../reducers/movieSlice";

export const asyncloadmovie=(id)=>async(dispatch,getState)=>{
try {
  const detail= await axios.get(`/movie/${id}`);
  const externalid= await axios.get(`/movie/${id}/external_ids`);
  const recommendations= await axios.get(`/movie/${id}/recommendations`);
  const similar = await axios.get(`/movie/${id}/similar`);
  const translations = await axios.get(`/movie/${id}/translations`);
  const vedios= await axios.get(`/movie/${id}/videos`);
  const watchprovider=await axios.get(`/movie/${id}/watch/providers`);
  let ultimatedetail = {
      detail:detail.data,
      externalid:externalid.data,
      recommendations:recommendations.data.results,
      similar:similar.data.results,
      translations:translations.data.translations.map((t)=>t.english_name),
      vedios:vedios.data,
      watchprovider:watchprovider.data.results.IN,

  }
  dispatch(loadmovie(ultimatedetail));
  console.log(ultimatedetail);
  
} catch (error) {
  console.log("error :", error);
}

}
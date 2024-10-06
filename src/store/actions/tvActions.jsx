export {removetv} from "../reducers/tvSlice";
import axios from "../../utils/axios";
import {loadtv} from "../reducers/tvSlice";

export const asyncloadtv=(id)=>async(dispatch,getState)=>{
try {
  const detail= await axios.get(`/tv/${id}`);
  const externalid= await axios.get(`/tv/${id}/external_ids`);
  const recommendations= await axios.get(`/tv/${id}/recommendations`);
  const similar = await axios.get(`/tv/${id}/similar`);
  const translations = await axios.get(`/tv/${id}/translations`);
  const videos= await axios.get(`/tv/${id}/videos`);
  const watchprovider=await axios.get(`/tv/${id}/watch/providers`);
  let ultimatedetail = {
      detail:detail.data,
      externalid:externalid.data,
      recommendations:recommendations.data.results,
      similar:similar.data.results,
      translations:translations.data.translations.map((t)=>t.english_name),
      videos:videos.data,
      watchprovider:watchprovider.data.results.IN,

  }
  dispatch(loadtv(ultimatedetail));
  console.log(ultimatedetail);
  
} catch (error) {
  console.log("error :", error);
}

}
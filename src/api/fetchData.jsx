
 // fetch data country wise
 const url = "https://covid19.mathdro.id/api";

  export const getDataCountry = async() =>{
      try{
        const countryApi = await fetch(`${url}/countries`);
          const countryResponse = await countryApi.json();
          const countryItemsArray = countryResponse["countries"];
          return countryItemsArray;
      }
      catch(error){
        return error;
      }
    
 }

 // fetch data globally
 export const getDataGlobally = async(country) => {
   let changeableUrl = url;
   if(country){
    changeableUrl = `${url}/countries/${country}`;
   }
     try{
        const globallyApi = await fetch(changeableUrl);
          const globallyResponse = await globallyApi.json();
          delete globallyResponse["countryDetail"]
          delete globallyResponse["dailyTimeSeries"]
          delete globallyResponse["dailySummary"]
          delete globallyResponse["image"]
          delete globallyResponse["source"]
          delete globallyResponse["countries"]
          delete globallyResponse["lastUpdate"]
            return globallyResponse;
     }
     catch(error){
         return error;
     }
    
  }
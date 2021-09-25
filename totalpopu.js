const getBlogs=()=>
{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
        console.log(xhr.response);
        const blogs=xhr.response;
        const totalPopulation=blogs.map((country)=>country.population).reduce((curr,sum)=>sum+curr,0);
        console.log("TotalPopulation= "+totalPopulation);
        
    };
    xhr.send();
};
getBlogs();
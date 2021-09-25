const getBlogs=()=>
{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
        console.log(xhr.response);
        const blogs=xhr.response;
        console.log(blogs.filter((country)=>country.population<200000));
        
    };
    xhr.send();
};
getBlogs();
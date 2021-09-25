const getBlogs=()=>
{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
        console.log(xhr.response);
        const blogs=xhr.response;
        blogs.forEach((element) => {
            console.log({"name":element.name,"capital":element.capital,"flag":element.flag})       
        });
        
    };
    xhr.send();
};
getBlogs();
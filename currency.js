const getBlogs=()=>
{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
        console.log(xhr.response);
        const blogs=xhr.response;
        var usd_countries=blogs.filter(element=>{
            for(let i of element.currencies)
                if(i.code ==='USD') return true;})
            .map((element)=>element.name);
        console.log(usd_countries);
    };
    xhr.send();
};
getBlogs();
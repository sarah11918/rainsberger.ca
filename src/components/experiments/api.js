async function fetchApi(query, {variables} = {}) {
    const headers = {'Content-Type':'application/json'};
    const response = await fetch("https://graphql-weather-api.herokuapp.com", {
        method:'POST',
        headers,
        body:JSON.stringify({query, variables}),
    });
    const json = await response.json();
    if(json.errors){
        console.log(json.errors);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}

export async function getWeather(){
    const data = await fetchApi(`
    {
        getCityByName(name: "Toronto"){
            name
            country
            weather {
                summary {
                    description
                }
            }
        }
    }
    `)
    console.log(data.getCityByName.name)
    return data
}
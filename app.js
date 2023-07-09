
const button=document.querySelector('#btn');
const temp=document.querySelector('.temp')
const city=document.querySelector('.city');
const min=document.querySelector('.minTemp');
const max=document.querySelector('.maxTemp');
const weatherInfo=document.querySelector('#weatherInfo');
button.addEventListener('click',()=>{
	const input=document.querySelector('#input').value.toUpperCase();
	
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '082758f179msh04013ba1d9c4e6ap1fe803jsn49a38eb69a69',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	
		fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input}`,options)
		.then(response=>response.json())
		.then((data)=> {
               const weatherData=data.temp;
			   const minData=data.min_temp;
			   const maxData=data.max_temp;
			   city.innerText=`${input}`;
			   temp.innerHTML=`${weatherData}`;
			   min.innerHTML=`${minData}`;
			   max.innerHTML=`${maxData}`;
		})
		.catch(error=> {

			console.log('error',error);
			weatherInfo.innerHTML='an error has occured while fetching';
		});
		event. preventDefault()

})


    
  
     
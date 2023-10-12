const wrapper =document.getElementById('boxwrapper')
const max = 7
for(let max = 1; max <= 100;  max++){
   
   const boxEL =document.createElement('div') 
    
    if(max % 3 ===0 && max % 5 === 0){
        boxEL.className='fizzbuzz'
        boxEL.innerHTML='fizzbuzz' 
    } else if(max % 3 === 0){
         boxEL.className='fizz'
         boxEL.innerHTML='fizz'
    } else if(max % 5 === 0){
        boxEL.className='buzz'
        boxEL.innerHTML='buzz'
    } else{
        boxEL.className='box'
        boxEL.innerHTML=max  
    }      
        wrapper.append(boxEL)
}

const wrapper =document.getElementById('boxwrapper')
const max = 7
for(let max = 1; max <= 100;  max++){
   
   const boxEL =document.createElement('div')  
    if(max % 3 ===0 && max % 5 === 0){
        boxEL.className='fizzbuzz'
        wrapper.append(boxEL)
        boxEL.innerHTML='fizzbuzz'
    } else if(max % 3 === 0){
         boxEL.className='fizz'
         wrapper.append(boxEL)
         boxEL.innerHTML='fizz'
    } else if(max % 5 === 0){
        boxEL.className='buzz'
        wrapper.append(boxEL)
        boxEL.innerHTML='buzz'
    } else{
        boxEL.className='box'
        wrapper.append(boxEL)
        boxEL.innerHTML=max
    }
}



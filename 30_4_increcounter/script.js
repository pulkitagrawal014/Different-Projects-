const counters = document.querySelectorAll('.counter');//there are many counters i.e why we have selected querySelectorAll

counters.forEach((counter)=>{      //isse we get each div so we can now work on it   
    // console.log(counter);

    counter.innerHTML = 0;   //yeh 0 hai intially, isse value tak leke jayenge
    const updateCounter = () =>{
        const targetCount = +counter.getAttribute('data-target')
        //getAttribute ek method hai jo html file hai uss mai jo data-target diya hai 
        //wo attribute le lega

        console.log(targetCount);  //iss pata chal gya ki value dikhne lagi h apan ko
        console.log(typeof(targetCount));   //string type hai; isse apan ko number mai convert karna hai
        //+ method mtlb urany se number mai convert kar rahe

        //There are 3 ways to achieve it:

        //1️⃣Using the unary plus operator:
        //var n = +str;                 //with the help of unary + operator  

        //2️⃣The Number Constructor:
        //var n = Number(str);          //passing str in the Number Object

        //3️⃣The parseFloat function:
        //var n=parseFloat(str);        
        
        const startingCount = Number(counter.innerHTML);

        const incr = targetCount /100 ; // it will increment the value like 100 200 300....

        if(startingCount<targetCount){
            counter.innerHTML = `${startingCount + incr}`;
            setTimeout(updateCounter,20)
        }
        else{
            counter.innerHTML = targetCount;
        }

    } 
updateCounter();
})
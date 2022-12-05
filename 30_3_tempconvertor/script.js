const calculateTemp = ()=>{
         const numberTemp=document.getElementById('temp').value;
         //yeh temp ki jo value hai wo de dega numberTemp mai
        //  console.log(numberTemp);

        const tempSelected = document.getElementById('temp_diff');
        const valueTemp = temp_diff.options [tempSelected.selectedIndex].value;
        //yeh bata rha hai konsa index hai 0(iss mai celsius) hai yaa 1(iss mai fahrehit) hai
        //selectedIndex method hai wo index de dega
        
        const celToFah = (cel)=>{
            let fahrenheit = Math.round((cel*9/5)+32);
            return fahrenheit;
        }

        const fahToCel = (fah)=>{
            let celsius = Math.round((fah-32)*5/9);
            return celsius;
        }

        let result;
        if(valueTemp=='cel'){
            result = celToFah(numberTemp);
            document.getElementById('resultContainer').innerHTML=`= ${result}°Fahrenheit`;
        }
        else{
            result = fahToCel(numberTemp);
            document.getElementById('resultContainer').innerHTML=`= ${result}°Celsius`;
        }
        }


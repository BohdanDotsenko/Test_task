function attempt(available, allowed, preferred) {
    let valid = []; // allowed and available
    let result = [];
    if (!available.length || !allowed.length || !preferred.length) {
        return [];
      }
    if (!allowed.includes('any')){    
        for (let i = 0; i < available.length; i++) {    
            //fill the array valid(allowed and available numbers)
            if (allowed.includes(available[i])){
                valid.push(available[i]);
            }
        }
    }
    else                            // if 'any' element is found in allowed than available == valid
        valid = available;          
    if (preferred.includes('any')){ 
        // if 'any' element is found in preferred than all valid numbers are preferred
        return valid;
    }
    else {
        let notPreferrad = []    
        // all not preferred but valid numners
        for( let i = 0; i < preferred.length; i++) { // push all preferred and valid numbers
            if(valid.includes(preferred[i]))
                result.push(preferred[i]);
            else 
                notPreferrad.push(preferred[i])
        }
            let buffer = Infinity;
            if(notPreferrad.length == 1) {     
                // if we have one not preferred number find close in value or min valid number
                    for(let i = 0; i < valid.length; i++) {  // 
                        if(!preferred.includes(valid[i])) 
                            buffer = valid[i]
                        if(buffer != Infinity)
                            break;
                    }
                    for (let i = 0; i < valid.length; i++){
                        if(!preferred.includes(valid[i]) && notPreferrad[0] < valid[i]) {
                            buffer = valid[i]
                            break;
                        }
                    }
                    if (buffer != Infinity)
                        result.push(buffer);
            }
            else if(notPreferrad.length > 1) { 
                // if we have more than one not preferred numbers we will find max not preferred valid number
                for(let i = 0; i < valid.length; i++) {
                    if (!preferred.includes(valid[i]))
                        buffer = valid[i];
                }
                if (buffer != Infinity)
                        result.push(buffer);
            }
    }
    return result.sort();
}

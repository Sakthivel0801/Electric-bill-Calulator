function Cal(){
    let a = Number(document.getElementById("input").value);
    let c = 0;

    if(a<50){
        c = a*0.75;
        let d = document.getElementById("output")
        d.innerHTML = c;
    }
    else if(a>50 && a<=150){
        a  = a-50;
        c =  (a*1) + (50*0.75);
        let d = document.getElementById("output")
        d.innerHTML = c;
    }
    else if(a>150&& a<=250){
         a = a-50;
         a = a-100;
         c = (a*1.30)+(100*1)+(50*0.75);
         let d = document.getElementById("output")
         d.innerHTML = c;
    }
    else{
         a = a-50;
         a = a-100;
         a= a-100;
         c = (a*1.50)+(100*1.30)+(100*1)+(50*0.75)
         let d = document.getElementById("output")
         d.innerHTML = c;
    }  
}
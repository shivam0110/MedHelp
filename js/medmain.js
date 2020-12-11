function run(){
    drug = document.getElementById('drugname').value;

    const api1 = `https://api.fda.gov/drug/label.json?search=${drug}`;
    fetch(api1)
            .then(response =>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
                var res1 = data.results[0].information_for_patients[0].split(".", 4);
                var res2 = data.results[0].adverse_reactions[0].split(".", 3);

                document.getElementById('soln').innerHTML = 
                    `<div class="medData">
                        <h2>${drug}</h2>
                        <br><br>
                        <h3 class="fhide">Patient Advice</h3>
                        <p class="thide">${data.results[0].information_for_patients[0]}</p>
                        <br>
                        <h3 class="fhide">Adverse Reaction</h3>
                        <p class="thide">${data.results[0].adverse_reactions[0]}</p>                                            
                        <br>
                        <h3 class="fhide">Overdosage</h3>
                        <p class="thide">${data.results[0].overdosage[0]}</p>                                            
                        <br>
                        <h3 class="fhide">Pregnancy</h3>
                        <p class="thide">${data.results[0].pregnancy[0]}</p>                                            
                        <br>
                        <h3 class="fhide">Elements</h3>
                        <p class="thide">${data.results[0].spl_product_data_elements[0]}</p>                                            
                        <br>

                    <br><br>
                    <hr>
                    <br>
                    </div>`
                
    });
}

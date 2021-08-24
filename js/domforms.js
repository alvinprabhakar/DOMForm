

window.onload = function domForms(){
    
    let heading = document.createElement("h1");
    let headvalue = document.createTextNode("Dom Survey");
    heading.append(headvalue);

    const container = document.createElement("div");
    container.setAttribute("class","container");

    const forms =  document.createElement("form")
    forms.setAttribute("id","myForm");
    forms.setAttribute("name","surveyform");

    const firstnameLabel = document.createElement("label");
    firstnameLabel.setAttribute("for","firstname");
    firstnameLabel.setAttribute("id","firstname");
    firstnameLabel.innerText = "FirstName : ";
    const firstnameInput = document.createElement("input");
    firstnameInput.setAttribute("class","text");
    firstnameInput.setAttribute("name","firstname"); 

    const lastnameLabel = document.createElement("label");
    lastnameLabel.setAttribute("for","lastname");
    lastnameLabel.setAttribute("id","lastname");
    lastnameLabel.innerText = "LastName : ";
    const lastnameInput = document.createElement("input");
    lastnameInput.setAttribute("class","text");
    lastnameInput.setAttribute("name","lastname");
    const linebreak1 = document.createElement("br");

    const addressLabel = document.createElement("label");
    addressLabel.setAttribute("for","address");
    addressLabel.setAttribute("id","address");
    addressLabel.innerText = "Address : ";
    const linebreak2 = document.createElement("br");
    const addressInput = document.createElement("input");
    addressInput.setAttribute("class","textaddress");
    addressInput.setAttribute("name","Address");
    const linebreak3 = document.createElement("br");
    const linebreak4 = document.createElement("br");

    const pincodeLabel = document.createElement("label");
    pincodeLabel.setAttribute("for","pincode");
    pincodeLabel.setAttribute("id","pincode");
    pincodeLabel.innerText = "Pincode : ";
    const pincodeInput = document.createElement("input");
    pincodeInput.setAttribute("class","text");
    pincodeInput.setAttribute("name","Pincode");
    const linebreak5 = document.createElement("br");
    const linebreak6 = document.createElement("br");

    const genderLabel = document.createElement("label");
    genderLabel.setAttribute("for","gender");
    genderLabel.setAttribute("id","gender");
    genderLabel.innerText = "Gender : ";
    const genderMaleInput = document.createElement("input");
    genderMaleInput.setAttribute("name","gender");
    genderMaleInput.setAttribute("class","gender");
    genderMaleInput.setAttribute("type","radio");
    genderMaleInput.setAttribute("value","Male");
    const genderMaleLabel = document.createElement("label");
    genderMaleLabel.setAttribute("for","male");
    genderMaleLabel.innerText = " Male";
    const genderFemaleInput = document.createElement("input");
    genderFemaleInput.setAttribute("name","gender");
    genderFemaleInput.setAttribute("type","radio");
    genderFemaleInput.setAttribute("value","Female");
    genderFemaleInput.setAttribute("class","femaleradio gender");
    const genderFemaleLabel = document.createElement("label");
    genderFemaleLabel.setAttribute("for","female");
    genderFemaleLabel.innerText = " Female";
    const linebreak7 = document.createElement("br");
    const linebreak8 = document.createElement("br");

    const foodcontainer = document.createElement("div");
    foodcontainer.setAttribute("id","food");
    foodcontainer.setAttribute("onclick","onlyTwoCheckBox()");
    const foodchoiceLabel = document.createElement("label");
    foodchoiceLabel.setAttribute("for","foodchoice");
    foodchoiceLabel.setAttribute("id","foodchoice");
    foodchoiceLabel.innerText = "Choice of Food : ";
    const linebreak9 = document.createElement("br");
    const linebreak10 = document.createElement("br");
    const vegetableInput = document.createElement("input");
    vegetableInput.setAttribute("name","vegetables");
    vegetableInput.setAttribute("value","vegetables");
    vegetableInput.setAttribute("type","checkbox");
    vegetableInput.setAttribute("class","checkboxsize");
    const vegetableLabel = document.createElement("label");
    vegetableLabel.setAttribute("for","vegetables");
    vegetableLabel.setAttribute("class","checkbox");
    vegetableLabel.innerText = " Vegetables";
    const nonVegInput = document.createElement("input");
    nonVegInput.setAttribute("name","nonveg");
    nonVegInput.setAttribute("value","Nonveg");
    nonVegInput.setAttribute("type","checkbox");
    nonVegInput.setAttribute("class","checkboxsize");
    const nonvegLabel = document.createElement("label");
    nonvegLabel.setAttribute("for","nonveg");
    nonvegLabel.setAttribute("class","checkbox");
    nonvegLabel.innerText = " Non-Veg";
    const diaryInput = document.createElement("input");
    diaryInput.setAttribute("name","diary");
    diaryInput.setAttribute("value","Diary");
    diaryInput.setAttribute("type","checkbox");
    diaryInput.setAttribute("class","checkboxsize");
    const diaryLabel = document.createElement("label");
    diaryLabel.setAttribute("for","diary");
    diaryLabel.setAttribute("class","checkbox");
    diaryLabel.innerText = " Diary";
    const fruitsInput = document.createElement("input");
    fruitsInput.setAttribute("name","fruits");
    fruitsInput.setAttribute("value","Fruits");
    fruitsInput.setAttribute("type","checkbox");
    fruitsInput.setAttribute("class","checkboxsize");
    const fruitsLabel = document.createElement("label");
    fruitsLabel.setAttribute("for","fruits");
    fruitsLabel.setAttribute("class","checkbox");
    fruitsLabel.innerText = " Fruits";
    const grainsInput = document.createElement("input");
    grainsInput.setAttribute("name","grains");
    grainsInput.setAttribute("value","Grains");
    grainsInput.setAttribute("type","checkbox");
    grainsInput.setAttribute("class","checkboxsize");
    const grainsLabel = document.createElement("label");
    grainsLabel.setAttribute("for","grains");
    grainsLabel.innerText = " Grains";
    const linebreak11 = document.createElement("br");
    const linebreak12 = document.createElement("br");

    const stateLabel = document.createElement("label");
    stateLabel.setAttribute("for","state");
    stateLabel.setAttribute("id","state");
    stateLabel.innerText = "State : ";
    const stateInput = document.createElement("input");
    stateInput.setAttribute("class","text");
    stateInput.setAttribute("name","state");
    const linebreak13 = document.createElement("br");
    const linebreak14 = document.createElement("br");

    const countryLabel = document.createElement("label");
    countryLabel.setAttribute("for","country");
    countryLabel.setAttribute("id","country");
    countryLabel.innerText = "Country : ";
    const countryInput = document.createElement("input");
    countryInput.setAttribute("class","text");
    countryInput.setAttribute("name","country");
    const linebreak15 = document.createElement("br");
    const linebreak16 = document.createElement("br");

    const submit = document.createElement("input");
    submit.setAttribute("class","submit");
    submit.setAttribute("value","submit");
    submit.setAttribute("type","button");
    submit.setAttribute("onclick","updateTable()")

   
    foodcontainer.append(foodchoiceLabel,linebreak9,linebreak10,vegetableInput,vegetableLabel,nonVegInput,nonvegLabel,
        diaryInput,diaryLabel,fruitsInput,fruitsLabel,grainsInput,grainsLabel,linebreak11,linebreak12)


    forms.append(firstnameLabel,firstnameInput,
                        lastnameLabel,lastnameInput,linebreak1,linebreak2,
                        addressLabel,addressInput,linebreak3,linebreak4,
                        pincodeLabel,pincodeInput,linebreak5,linebreak6,
                        genderLabel,genderMaleInput,genderMaleLabel,genderFemaleInput,genderFemaleLabel,linebreak7,linebreak8,
                        foodcontainer,
                        stateLabel,stateInput,linebreak13,linebreak14,
                        countryLabel,countryInput,linebreak15,linebreak16,
                        submit);
    
    container.append(forms);
    document.body.append(heading,container);


    
}

function updateTable(){

    

    const tablecontainer = document.createElement("div")
    tablecontainer.setAttribute("class","tablecontainer")
    tablecontainer.innerHTML = `
    <table>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>Gender</th>
        <th>Food</th>
        <th>State</th>
        <th>Country</th>
        </tr>
        <tr>
            <td>${document.getElementsByClassName("text")[0].value}</td>
            <td>${document.getElementsByClassName("text")[1].value}</td>
            <td>${document.getElementsByClassName("textaddress")[0].value}</td>
            <td>${document.getElementsByClassName("text")[2].value}</td>
            <td>${radioselect()}</td>
            <td>${foodselect()}</td>
            <td>${document.getElementsByClassName("text")[3].value}</td>
            <td>${document.getElementsByClassName("text")[4].value}</td>

            
        </tr>
    </table>
    `;
    
    function radioselect(){
        const rbs = document.querySelectorAll('input[name="gender"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            return selectedValue;
    }

    function foodselect(){
        const rbs = document.querySelectorAll('input[type="checkbox"]');
            let selectedValue; let chociearr= [];
            for (const rb of rbs) {
                console.log(rb);
                if (rb.checked) {
                    selectedValue = rb.value;
                    chociearr.push(selectedValue);
                }
            }
            return chociearr;
    }
    
  

    document.body.append(tablecontainer);

    document.getElementById("myForm").reset();

    setTimeout(() => document.getElementsByClassName("tablecontainer")[0].style.display = 'none' , 2000);


    
}

function onlyTwoCheckBox() {
    var checkboxgroup = document.querySelectorAll('input[type="checkbox"]');
    var limit = 2;
    for (var i = 0; i < checkboxgroup.length; i++) {
        checkboxgroup[i].onclick = function() {
            var checkedcount = 0;
                for (var i = 0; i < checkboxgroup.length; i++) {
                checkedcount += (checkboxgroup[i].checked) ? 1 : 0;
            }
            if (checkedcount > limit) {
                console.log("You can select maximum of " + limit + " checkbox.");
                alert("You can select maximum of " + limit + " checkbox.");
                this.checked = false;
            }
        }
    }
}


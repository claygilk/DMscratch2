function createField(){
    let form = document.createElement("form");

    let FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "fullname");
    form.appendChild(FN);

    let b = document.createElement("button");
    
    b.setAttribute("value", "Button");
    b.setAttribute("onclick", "createField()");

    form.appendChild(b);

    // var text = document.createTextNode("New Paragraph Created");
    
    // paragraph.appendChild(text);

     document.body.appendChild(form);

}

let idCounter = 0;

function addMonster(){
    idCounter++;
    let form = document.createElement("form");

    let HpLabel = document.createElement("label");
    HpLabel.appendChild(document.createTextNode(idCounter + ". HP: "));
    
    let HpBar = document.createElement("label");
    HpBar.innerHTML = 0;
    HpBar.setAttribute("id", "HpBar_" + idCounter);
    
    let healInput = document.createElement("input");
    healInput.setAttribute("type", "number");
    healInput.setAttribute("name", "heal");
    healInput.setAttribute("placeholder", "Heal");
    //healInput.setAttribute("width", "10px")
    healInput.setAttribute("id", "HealInput_" + idCounter);
    
    let healButton = document.createElement("button");
    healButton.innerHTML = "Heal";
    healButton.setAttribute("id", "HealButton_" + idCounter);
    
    healButton.setAttribute("onclick", "applyHeal(" + idCounter + "); return false");
    
    
    let damageInput = document.createElement("input");
    damageInput.setAttribute("type", "number");
    damageInput.setAttribute("name", "dmg");
    damageInput.setAttribute("placeholder", "Damage");
    damageInput.setAttribute("id", "DamageInput_" + idCounter)
    
    let damageButton = document.createElement("button");
    damageButton.innerHTML = "Damage";
    damageButton.setAttribute("onclick", "applyDamage(" + idCounter + "); return false");
    damageButton.setAttribute("id", "DamageButton_" + idCounter)
    
    form.appendChild(HpLabel);
    form.appendChild(HpBar);
    form.appendChild(healInput);
    form.appendChild(healButton);
    form.appendChild(damageInput);
    form.appendChild(damageButton);
    
    document.getElementById("DMscreen").appendChild(form);
}


function applyDamage(id){
    let HpBar = document.getElementById("HpBar_" + id);

    let amount = document.getElementById("DamageInput_" + id).value;

    let currentHP = HpBar.innerHTML;

    HpBar.innerHTML = Number(currentHP) - Number(amount);
    
    console.log("do some damage to " + "HpBar_" + id + " from " + currentHP + " by " + amount + " to " + HpBar.innerHTML);

    document.getElementById("DamageInput_" + id).value = '';
}

function applyHeal(id){
    
    let HpBar = document.getElementById("HpBar_" + id);
    
    let amount = document.getElementById("HealInput_" + id).value;
    
    let currentHP = HpBar.innerHTML;
    
    HpBar.innerHTML = Number(currentHP) + Number(amount);
    
    console.log("do some healing to " + "HpBar_" + id + " from " + currentHP + " by " + amount + " to " + HpBar.innerHTML);

    document.getElementById("HealInput_" + id).value = '';
}
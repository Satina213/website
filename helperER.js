document.getElementById('statsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    // Collect all the input values
    const stats = {
        vigor: parseInt(document.getElementById('vigor').value),
        mind: parseInt(document.getElementById('mind').value),
        endurance: parseInt(document.getElementById('endurance').value),
        strength: parseInt(document.getElementById('strength').value),
        dexterity: parseInt(document.getElementById('dexterity').value),
        intelligence: parseInt(document.getElementById('intelligence').value),
        faith: parseInt(document.getElementById('faith').value),
        arcane: parseInt(document.getElementById('arcane').value),
    };
    // //TODO impliment the correct functions for vigor and mind
    // *** VIGOR *** lvl1 = 300
    // Level 1 - 25 --> 300 + 500*(((Lvl - 1) / 24)^1.5)
    // Level 26 - 40 --> 800 + 650*(((Lvl - 25) / 15)^1.1)
    // Level 41 - 60 --> 1450 + 450*(1 - (1 - ((Lvl - 40) / 20))^1.2)
    // Level 61 - 99 --> 1900 + 200*(1 - (1 - ((Lvl - 60) / 39))^1.2)
    // *** MIND *** lvl1 = 40
    // Level 1 - 15 --> 50 + 45*((Lvl - 1) / 14)
    // Level 16 - 35 --> 95 + 105*((Lvl - 15) / 20)
    // Level 36 - 60 --> 200 + 150*(1 - (1 - ((Lvl - 35) / 25))^1.2))
    // Level 61 - 99 --> 350 + 100*((Lvl - 60) / 39)
    // *** ENDURANCE ***
    // Level 1 - 15: 80 + 25*((Lvl - 1) / 14)
    // Level 16 - 35: 105 + 25*((Lvl - 15) / 15)
    // Level 36 - 60: 130 + 25*((Lvl - 30) / 20)
    // Level 61 - 99: 155 + 15*((Lvl - 50) / 49)

    let staminaTotal;
    if (stats.endurance >=3 && stats.endurance <= 6)    {
        staminaTotal = Math.floor(80 + 25*((stats.endurance - 1.75) / 14.0))
    } else if (stats.endurance == 7)    {
        staminaTotal = 88
    } else if (stats.endurance <=15)   {
        staminaTotal = Math.floor(80 + 25*((stats.endurance - 1) / 14.0))
    } else if (stats.endurance <= 35)   {
        staminaTotal = Math.floor(105 + 25*((stats.endurance - 15) / 15.0))
    } else if (stats.endurance <= 60)   {
        staminaTotal = Math.floor(130 + 25*((stats.endurance - 50) / 20.0))
    } else if (stats.endurance <= 99)   {
        staminaTotal = Math.floor(155 + 15*((stats.endurance - 60) / 49.0))
    }

    let healthTotal;
    if (stats.vigor <=25) {
        healthTotal = Math.floor(300 + 500*(((stats.vigor - 1) / 24)**1.5))
    }   else if (stats.vigor <=40)   {
        healthTotal = Math.floor(800 + 650*(((stats.vigor - 25) / 15)**1.1))
    }   else if (stats.vigor <=60)   {
        healthTotal = Math.floor(1450 + 450*(1 - (1 - ((stats.vigor - 40) / 20))**1.2))
    }   else if (stats.vigor <= 99) {
        healthTotal = Math.floor(1900 + 200*(1 - (1 - ((stats.vigor - 60) / 39))**1.2))
    }

    let manaTotal = 20;
    if (stats.mind <=15)    {
        manaTotal = Math.floor(50 + 45*((stats.mind - 1) / 14))
    } else if (stats.mind <= 35)    {
        manaTotal = Math.floor(95 + 105*((stats.mind - 15) / 20))
    } else if (stats.mind <=60) {
        manaTotal = Math.floor(200 + 150*(1 - (1 - ((stats.mind - 35) / 25))**1.2))
    } else if (stats.mind <=99) {
        manaTotal = Math.floor(350 + 100*((stats.mind - 60) / 39))
    }

    // Perform calculations (example: calculate total stats)
    const totalStats = Object.values(stats).reduce((sum, value) => sum + value, 0);

    // Display the result
    const resultDiv = document.getElementById('statTotal');
    resultDiv.innerHTML = `<p>Total Stats: ${totalStats}</p>`;

    const healthDiv = document.getElementById('healthTotal');
    healthDiv.innerHTML = `<p>Health Total: ${healthTotal}</p>`;

    const manaDiv = document.getElementById('manaTotal');
    manaDiv.innerHTML = `<p>Mana Total: ${manaTotal}</p>`;

    const staminaDiv = document.getElementById('staminaTotal');
    staminaDiv.innerHTML = `<p>Stamina Total: ${staminaTotal}</p>`;


});

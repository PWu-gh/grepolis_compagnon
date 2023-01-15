console.log("Shortcuts");

let pressed = false;
let off = false;

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    
    if (off)
        return;

    if (event.key == 'Control')
        pressed = true;

    //villagers shortcut
    if (pressed == false)
    {
        if (event.key == 'v')
        {
            let farm_town_window = document.getElementById("fto_town_wrapper");
            if (!farm_town_window)//function to check if villagers are already opened
            {
                let villagers = document.querySelector('[name="farm_town_overview"]');
                villagers.click();
                farmer_town_simplifier(event);
            }
            else
            {
                let fto_window = farm_town_window.parentNode.parentNode.parentNode;
                let fto_header = fto_window.getElementsByClassName("ui-dialog-title")[0].parentNode;
                let fto_close_btn = fto_header.querySelector('[type="button"][class="icon_right icon_type_speed ui-dialog-titlebar-close"]');
                fto_close_btn.click();
            }
        }
    
        //culture shortcut
        else if (event.key == 'c')
        {
            let culture = document.querySelector('[name="culture_overview"]');
            culture.click();
        }
    
        //market shortcut
        else if (event.key == 'm')
        {
            let city = document.querySelector('[class="option city_overview circle_button js-option"]');
            if (city)
                city.click();
            let market = document.querySelector('[id="building_main_area_market"]');
            market.click();
        }
    
        //b shortcut
        else if (event.key == 'b')
        {
            let ville = document.querySelector('[name="towns_overview"]');
            ville.click();
        }
    }
})
//Ctrl security
document.addEventListener('keyup', (event) => {
    if (event.key == 'Control')
        pressed = false;
})

// text listener
document.addEventListener('keyup', (event) => {
    if (event.key == 'Control')
        pressed = false;
})

let boutonoff_shortcuts = document.createElement('div');
boutonoff_shortcuts.innerHTML = "ON";
document.body.appendChild(boutonoff_shortcuts);

//CSS
boutonoff_shortcuts.style.cssText = `
    position: absolute;
    width:50px;
    height:50px;
    z-index:1000;
    background-color: #2A81EB;
    color: #FFFFFF;
    bottom:0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;


//Switch
boutonoff_shortcuts.onclick = () => 
{
    off = !off;
    let color = off ? "#D17636" : "#2A81EB";
    boutonoff_shortcuts.style.background = color;
    boutonoff_shortcuts.innerHTML  = off ? "OFF" : "ON";
};
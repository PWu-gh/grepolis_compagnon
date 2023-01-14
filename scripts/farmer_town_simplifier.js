console.log("start farmer_town_simplifier")
document.addEventListener("click", farmer_town_simplifier)


// simplify the use of farmer town window:
// auto select toutes les villes de paysans
// auto accept confirmation
// auto fermeture de la fenêtre
function farmer_town_simplifier(e){
    if(e.isTrusted == true){
        setTimeout(() => { // wait 100ms to let the page load

            let farm_town_window = document.getElementById("fto_town_wrapper");
            console.log("tete", farm_town_window);

            if(farm_town_window){
                let fto_claim_button = document.getElementById("fto_claim_button");
                console.log("farm opened");

                if(fto_claim_button != null){
                    let claim_btn_is_available = fto_claim_button.classList.contains("disabled") ? false : true;
                    if(claim_btn_is_available){
                        let select_all_btn = farm_town_window.getElementsByClassName("checkbox select_all")[0];
                        
                        if (! select_all_btn.classList.contains("checked")) 
                            select_all_btn.click();
                    }

                    fto_claim_button.onclick = test()
                    function test(){
                        setTimeout(() => { 
                            document.getElementsByClassName("btn_confirm button_new")[0].click();

        
                            let fto_window = farm_town_window.parentNode.parentNode.parentNode;
                            let fto_header = fto_window.getElementsByClassName("ui-dialog-title")[0].parentNode;
                            let fto_close_btn = fto_header.querySelector('[type="button"][class="icon_right icon_type_speed ui-dialog-titlebar-close"]');
                            
                            if(fto_close_btn != undefined)
                                fto_close_btn.click();
                        }, 100);
                    }
                }
            }
        }, 500);

    }

    
}


function fto_auto_match_time(){
    
}

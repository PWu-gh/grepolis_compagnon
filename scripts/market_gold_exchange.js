console.log("start market_gold_exchange")
document.addEventListener("click", market_simplifier)


// simplify the use of farmer town window:
// auto select toutes les villes de paysans
// auto accept confirmation
// auto fermeture de la fenêtre
function market_simplifier(e){
    if(e.isTrusted == false){return}

    setTimeout(() => { // wait 100ms to let the page load
        let gold_exchange_window = document.getElementById("premium_exchange");

        if(gold_exchange_window){
            let sell_ress_btn = gold_exchange_window.querySelector('[data-pagenr="1"]')
            console.log("gold", sell_ress_btn);
            sell_ress_btn.click()
        }

        // let fto_claim_button = document.getElementById("premium_exchange");

        // if(fto_claim_button != null){
        //     let claim_btn_is_available = fto_claim_button.classList.contains("disabled") ? false : true;
        //     if(claim_btn_is_available){
        //         let select_all_btn = farm_town_window.getElementsByClassName("gp_tab tab_premium_exchange")[0];
                
        //         if (! select_all_btn.classList.contains("checked")) 
        //             select_all_btn.click();
        //     }
        // }
    }, 200);

    
}


// Layout.wnd.Create(Layout.wnd.TYPE_FARM_TOWN_OVERVIEWS,'Villages de Paysan')


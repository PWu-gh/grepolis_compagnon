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
            sell_ress_btn.click()

            let buy_ress_btn = gold_exchange_window.querySelector('[data-pagenr="0"]')
            if(buy_ress_btn){
                buy_ress_btn.remove()

                let buy_ress_cont = gold_exchange_window.querySelector('[data-pagenr="0"][data-type="buy"]')
                buy_ress_cont.remove()
            }
        }

        // there are only 3 since buy progress bar has been removed
        let ressources = gold_exchange_window.getElementsByClassName("resource")
        
        ressources_array = Array.from(ressources)
        ressources_array.forEach(ress_balise => {
            let text_div = ress_balise.getElementsByClassName("caption")[0]

            if(text_div.getElementsByClassName("max")[0]){
                let max = text_div.getElementsByClassName("max")[0].innerHTML
                let current = text_div.getElementsByClassName("current")[0].innerHTML
                let available_ress = max-current
                text_div.innerHTML = available_ress
            }
        });
    }, 200);

    
}


// Layout.wnd.Create(Layout.wnd.TYPE_FARM_TOWN_OVERVIEWS,'Villages de Paysan')


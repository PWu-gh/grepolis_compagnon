console.log("start farmer_town_simplifier")
document.addEventListener("click", farmer_town_simplifier)


function farmer_town_simplifier(){
    let farm_town_window = document.getElementById("fto_town_wrapper");

    if(farm_town_window){
        setTimeout(() => { // wait 100ms to let the page load
            let fto_claim_button = document.getElementById("fto_claim_button");

            if (! fto_claim_button.classList.contains("disabled")){
                let select_all_btn = farm_town_window.getElementsByClassName("checkbox select_all")[0];
                
                if (! select_all_btn.classList.contains("checked")) 
                    select_all_btn.click();
            }

            function click_fto_confirm(){
                setTimeout(() => { 
                    document.getElementsByClassName("btn_confirm button_new")[0].click();
                    fto_claim_button.removeEventListener('click', test);
                }, 100);
            }

            fto_claim_button.addEventListener("click", click_fto_confirm);
        }, 100);
    }
}

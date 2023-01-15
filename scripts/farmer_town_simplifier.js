console.log("start farmer_town_simplifier")
document.addEventListener("click", farmer_town_simplifier)

let farm_town_countdown = 1
let farm_countdown_node = init_farm_countdown()
let countdown_func_state = null
let time_options_state = ["fto_300","fto_600"]

// simplify the use of farmer town window:
// auto select toutes les villes de paysans
// auto accept confirmation
// auto fermeture de la fenêtre

function farmer_town_simplifier(e){
    // if(e.isTrusted == false){return}
    setTimeout(() => { // wait 100ms to let the page load
        let farm_town_window = document.getElementById("fto_town_wrapper");
        if( ! farm_town_window){ return }


        let fto_claim_button = document.getElementById("fto_claim_button");
        if(fto_claim_button){
            let claim_btn_is_available = fto_claim_button.classList.contains("disabled") ? false : true;
            if(claim_btn_is_available){
                let select_all_btn = farm_town_window.getElementsByClassName("checkbox select_all")[0];
                
                if (! select_all_btn.classList.contains("checked")){ 
                    select_all_btn.click();
                    time_options_state = ["fto_300","fto_600"]
                }
                fto_claim_button.onclick = claim_ressources
                update_time_options()
            }

            function claim_ressources(){
                setTimeout(() => { 
                    let yes_btn = document.getElementsByClassName("btn_confirm button_new")[0]
                    if (yes_btn)
                        yes_btn.click();
                
                    let fto_window = farm_town_window.parentNode.parentNode.parentNode;
                    let fto_header = fto_window.getElementsByClassName("ui-dialog-title")[0].parentNode;
                    let fto_close_btn = fto_header.querySelector('[type="button"][class="icon_right icon_type_speed ui-dialog-titlebar-close"]');
                    fto_close_btn.click();

                    let picked_time = time_options_state[1].substring(4)
                    fto_countdown_loop(picked_time, farm_countdown_node)

                }, 200);
            }
        }
    }, 300);
}




String.prototype.toHHMMSS = function () {
    let sec_num = parseInt(this, 10); // don't forget the second param
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}


function init_farm_countdown(){
    let farm_countdown = document.createElement('div');
    farm_countdown.innerHTML = "👨‍🌾 "+"00:00:00" ;
    document.body.appendChild(farm_countdown);

    farm_countdown.style.cssText = `
        position: absolute;
        width:90px;
        height:40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #E2D593 ;
        z-index:1000;
        top: 57px;
        right: 138px;
        font-weight:bold;
        border: 3px solid #855C04;
        font-size:12px;
        cursor: pointer;
        border-radius: 4px;
        opacity: 0.85;
    `;

    farm_countdown.onclick = (e)=>{
        let farm_town_btn = document.querySelector('[name="farm_town_overview"]').click();
    }
    return farm_countdown
}



function decrement_countdown(farm_countdown_node){
    farm_town_countdown --;
    let hhmmss = farm_town_countdown.toString().toHHMMSS()
    farm_countdown_node.innerHTML = "👨‍🌾 "+hhmmss;
    // console.log(farm_town_countdown, hhmmss);
}




function fto_countdown_loop(countdown_start_sec, farm_countdown_node){
    farm_town_countdown = countdown_start_sec

    if(countdown_func_state)
        clearInterval(countdown_func_state);

    countdown_func_state = setInterval(()=>{ 
        if (farm_town_countdown > 0)
            decrement_countdown(farm_countdown_node);
        else 
           clearInterval(countdown_func);
    }, 1000)
}



function update_time_options(){
    let time_options = document.getElementById("time_options_wrapper");
    let time_picked = time_options.getElementsByClassName("fto_time_checkbox active");

    let time1 = time_picked[0].classList[1]
    let time2 = time_picked[1] ? time_picked[1].classList[1] : null

    let link_options = {
        "fto_300"   : "fto_600",
        "fto_1200"  : "fto_2400",
        "fto_5400"  : "fto_10800",
        "fto_14400" : "fto_28800",
        "fto_600"   : "fto_300",
        "fto_2400"   : "fto_1200",
        "fto_10800"   : "fto_5400",
        "fto_28800"   : "fto_14400"
    }

    if(time2){
        let time_pair = [time1, time2]
        let is_same_time = time_options_state.toString() == time_pair.toString();

        if(! is_same_time){
            if(time_options_state[0] != time_pair[0]){
                time_options.getElementsByClassName(link_options[time_pair[0]])[0].click()
            }else{
                time_options.getElementsByClassName(link_options[time_pair[1]])[0].click()
            }
            time_options_state = time_pair
        }
    }
}
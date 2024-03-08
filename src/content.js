function alert_and_setTime(){
    const now = new Date();
    chrome.storage.sync.set({"timeDataSet":now.toString()}, ()=>{});
    window.alert(
        "I'm prohibiting the use of sns for the next 3 hours."
    );
    window.history.back();
}

function confirmWhetherToAccessSNS(){
    var no = false;
    answer = window.confirm(`Do you continue using SNS?`);
    if (answer == no){
        alert_and_setTime();
    }
    answer = window.confirm("Are you sure?");
    if (answer == no){
        alert_and_setTime();
    }
    answer = window.confirm("Are you really sure?");
    if (answer == no){
        alert_and_setTime();
    }
    window.alert(`Be careful for WASTING YOUR TIME`);
}   

window.addEventListener("load", (event) => {
    // chrome.storage.local.clear();
    chrome.storage.sync.get("timeDataSet", (value) => {
        let timeData = Date.parse(value.timeDataSet);
        const now = new Date();
        if (timeData != null){
            let diffMilliSec = now - timeData;
            let diffHours = diffMilliSec / 1000 / 60 / 60;
            if (diffHours < 3){
                window.alert(`DO WHAT YOU SHOULD DO!!!`);
                window.history.back();
            }
            else{
                confirmWhetherToAccessSNS();
            }
        }
        else{
            confirmWhetherToAccessSNS();
        }  
    });
});


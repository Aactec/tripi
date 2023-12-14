const hack = Web5.Web5;
const { web5, did: hackDid } = await hack.connect({
    sync: 'off',
});
document.getElementById("log").innerHTML = hackDid;
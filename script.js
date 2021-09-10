function calculate(){

    const percent = .20;

    pOneFStat=Number(document.getElementById("fSOne").value);
    pOneSStat=Number(document.getElementById("fSTwo").value);
    pOneTStat=Number(document.getElementById("fSThree").value);

    pTwoFStat=Number(document.getElementById("sSOne").value);
    pTwoSStat=Number(document.getElementById("sSTwo").value);
    pTwoTStat=Number(document.getElementById("sSThree").value);

    //algo parent 1
    const pFirstStatsDiv = (pOneFStat+pTwoFStat) / 2;
    const pFirstStatsPercentage = pFirstStatsDiv*percent;
    var finalFStat = pFirstStatsDiv+pFirstStatsPercentage;

    //algo parent 2
    const pSecondStatDiv = (pOneSStat+pTwoSStat) / 2;
    const pSecondStatPercentage = pSecondStatDiv*percent;
    var finalSStat = pSecondStatDiv+pSecondStatPercentage;

    //algo parent 3
    const pTwoThirdStatsDiv = (pOneTStat+pTwoTStat) / 2;
    const pTwoThirdStatsPercentage = pTwoThirdStatsDiv*percent;
    var finalTStat = pTwoThirdStatsDiv+pTwoThirdStatsPercentage;

    const finalResult1 = finalFStat+finalSStat+finalTStat;

    //const rarity;
    let rare = "Rare dragon!";
    let uncommon = "Uncommon dragon";
    let common = "common dragon";
    
    //Determin rarity
    if(finalResult1 >= 90){
        document.getElementById("finalResult").textContent= rare;;
    }else if(finalResult1 <= 89 || finalResult1 <= 50){
        document.getElementById("finalResult").textContent= uncommon;
    }else{
        document.getElementById("finalResult").textContent= common;
    }

    document.getElementById("stat1").textContent= Math.round(finalFStat);
    document.getElementById("stat2").textContent= Math.round(finalSStat);
    document.getElementById("stat3").textContent= Math.round(finalTStat);
    document.getElementById("finalResult1").textContent= finalResult1;
    }
    

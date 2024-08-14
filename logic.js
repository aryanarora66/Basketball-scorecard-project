function increment(target,count){
    let scoretarget = document.getElementById(target);
    if(scoretarget){
        let score = parseInt(scoretarget.textContent);
        score += count;
        scoretarget.textContent = score;
    }

}
function saturdayFun(skate= "roller-skate") {
    return `This Saturday, I want to ${skate}!`
}
saturdayFun();
saturdayFun('bathe my dog');

const mondayWork = function(work= "go to the office") {
    return `This Monday, I will ${work}.`
}
mondayWork();
mondayWork("work from home");

const wrapAdjective = function(random="*") {
    return function(feels="special") {
        return `You are ${random}${feels}${random}!`
    }   
}
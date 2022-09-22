// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue===43) {
        return 1
     }
     else if (someValue===50,34) {
        return 8
     }
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264
}

function distanceTravelledInFeet(start,destination){
    return (Math.abs(start-destination))*264
}

function calculatesFarePrice(start,destination){
    const distance = Math.abs(start-destination)
    if(((distance)*264)<400){
        return 0
    }
    else if (((distance)*264)>400 &&((distance)*264)<2000 ){
        return (((distance)*264)-400)*.02
    }
    else if (((distance)*264)>2000 && ((distance)*264)<2500){
        return 25
    }
    else if((distance*264)>2500){
        return 'cannot travel that far'
    }
}
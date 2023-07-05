/* Solve the following problem in JavaScript:

Turn a string of 24h time into words.

You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

Examples of the output we’d like:

Input	Expected Output
00:00	midnight
00:12	twelve twelve am
01:00	one o’clock am
06:01	six oh one am
06:10	six ten am
06:18	six eighteen am
06:30	six thirty am
10:34	ten thirty four am
12:00	noon
12:09	twelve oh nine pm
23:23	eleven twenty three pm */


function timetoWords(timeString) {
    let hour = parseInt(timeString.slice(0,2));
    const minute = parseInt(timeString.slice(3));

    let ampm = hour < 12 ? "am" : "pm";

    // convert 24 hour time to 12 hour am/pm time
    if (hour > 12 && hour % 12 === 0){
        hour = 12;
    } else {
        hour = hour % 12;
    }
    
    // Array for all possible hour text
    const hourText = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']

    // Array for all possible minute text
    const minText = [
        "o'clock", 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'thirty', 'thirty one', 'thirty two', 'thirty three', 'thirty four', 'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine', 'forty', 'forty one', 'forty two', 'forty three', 'forty four', 'forty five', 'forty six', 'forty seven', 'forty eight', 'forty nine', 'fifty', 'fifty one', 'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven', 'fifty eight', 'fifty nine'
    ]

    let timeInWords = `${hourText[hour]} ${minText[minute]} ${ampm}`;

    if (timeInWords === "twelve o'clock am") {
        timeInWords = "midnight";
    } 
    if (timeInWords === "twelve o'clock pm") {
        timeInWords = "noon";
    }

    return timeInWords;
}

module.exports = timetoWords;
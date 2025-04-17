function ColourMix(rgb_colour1, rgb_colour2) {
    const primary = ["red", "green", "blue"];
    if (!primary.includes(rgb_colour1) || !primary.includes(rgb_colour2)) {
        return "Error";
    }

    if (rgb_colour1 === rgb_colour2) return rgb_colour1;

    const mixSet = new Set([rgb_colour1, rgb_colour2]);

    if (mixSet.has("red") && mixSet.has("blue")) return "fuchsia";
    if (mixSet.has("red") && mixSet.has("green")) return "yellow";
    if (mixSet.has("green") && mixSet.has("blue")) return "aqua";

    return "Error";
}

function LargestProduct(val1, val2, val3) {
    const values = [val1, val2, val3].sort((a, b) => b - a);
    return values[0] * values[1];
}

function DayoftheWeek(day_num) {
    const days = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    };
    return days[day_num] || "Error";
}

function PayRaise(status, years, salary) {
    let raisePercent = 0;

    if (status === 'F') {
        if (years >= 10) raisePercent = 0.05;
        else if (years < 4) raisePercent = 0.015;
        else raisePercent = 0.02;
    } else if (status === 'P') {
        if (years > 10) raisePercent = 0.03;
        else if (years < 4) raisePercent = 0.01;
        else raisePercent = 0.02;
    } else {
        return "Error";
    }

    return parseFloat((salary * (1 + raisePercent)).toFixed(2));
}

function isLeap(year) {
    if (year % 4 !== 0) return false;
    if (year % 100 !== 0) return true;
    return year % 400 === 0;
}

export {ColourMix, LargestProduct, DayoftheWeek, PayRaise, isLeap};
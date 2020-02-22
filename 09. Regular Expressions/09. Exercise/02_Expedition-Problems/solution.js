function solve() {
    let keyword = document.getElementById("string").value;
    let text = document.getElementById("text").value;

    let message = text.match(`${keyword}(.+)${keyword}`)[1];
    let locationPattern = /(east|north).*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim;

    let east;
    let north;
    let result;
    while ((result = locationPattern.exec(text)) !== null) {

        if (result[1].toLowerCase() === "east") {
            east = result;
        } else {
            north = result;
        }
    }

    let eastCoordinates = document.createElement('p');
    eastCoordinates.innerHTML = `${east[2]}.${east[3]} E`;

    let northCoordinates = document.createElement('p');
    northCoordinates.innerHTML = `${north[2]}.${north[3]} N`;
    
    let msg = document.createElement("p");
    msg.innerHTML = `Message: ${message}`;

    document.getElementById('result').appendChild(northCoordinates);
    document.getElementById('result').appendChild(eastCoordinates);
    document.getElementById('result').appendChild(msg);
}
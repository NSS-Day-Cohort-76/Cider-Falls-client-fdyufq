import { getGuests, getAreas } from "./Database.js"

export const guestHTML = () => {
const guests = getGuests();
const areas = getAreas()
let guestListHTML = `
    <h2>Current Park Guests</h2>
    <ol>`;

for (const guest of guests) {
    const guestLocation = areas.filter(obj => obj.id === guest.areaId).map(obj => obj.area)
    guestListHTML += `
            <li data-type="guest"
                data-guest-id="${guest.id}"
                data-area="${guest.areaId}"
            >${guest.firstName} ${guest.lastName} (${guestLocation.join('')})
            </li>`;
        
}

guestListHTML += "</ol>";
return guestListHTML;

};
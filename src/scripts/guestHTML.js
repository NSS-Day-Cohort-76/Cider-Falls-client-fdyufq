import { getGuests, getAreas } from "./Database.js"

export const guestHTML = () => {
const guests = getGuests();
let guestListHTML = `
    <h2>Current Park Guests</h2>
    <ol>`;

for (const guest of guests) {
    guestListHTML += `
            <li data-type="guest"
                data-guest-id="${guest.id}"
            >${guest.firstName} ${guest.lastName}
            </li>`;
}

guestListHTML += "</ol>";
return guestListHTML;

};
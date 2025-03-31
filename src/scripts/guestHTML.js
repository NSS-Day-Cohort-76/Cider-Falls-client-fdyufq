import { getGuests } from "./Database.js"

export const guestList = () => {
const guests = getGuests();
let guestListHTML = `
    <h2>Current Park Guests</h2>
    <ol>`;

for (const guest of guests) {
    guestListHTML += `
            <li class="guest_names">
             ${guest.firstName} ${guest.lastName}
            </li>`;
}

guestListHTML += "</ol>";
return guestListHTML;

};
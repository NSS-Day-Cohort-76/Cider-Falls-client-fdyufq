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
export const guestEventListener = () => {
document.addEventListener("click", (clickEvent) => {
    const clickTarget = clickEvent.target;

    if (clickTarget.dataset.type === "guest") {
        const guestID = clickTarget.dataset.guestId
        const allGuests = getGuests();
        const allAreas = getAreas();

        let guest = null;
        let area = null;

        for (const guestItem of allGuests) {
            if (guestItem.id === parseInt(guestID)) {
                guest = guestItem.id;
                break; 
            }
        }

        if (guest) {
        for (const areaItem of allAreas) {
            if (guest.areaId === areaItem.id){
                area = areaItem;
                break;
            }
        }
    }
            if (area && guest) {
            window.alert(`This guest is located in ${area.area}`);
        }
    }
});}
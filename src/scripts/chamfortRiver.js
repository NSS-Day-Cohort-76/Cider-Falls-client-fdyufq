import { getAreas } from "../src/scripts/Database.js"
import { getServices } from "../src/scripts/Database.js"
import { getServiceAreaa } from "../src/scripts/Database.js"
import { getGuests } from "../src/scripts/Database.js"



document.addEventListener("click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const areaID = itemClicked.dataset.id
        if (itemClicked.dataset.type === "area") {
            let guestCounter = 0
            const guests = getGuests()
            for (const guest of guests) {
                if(parseInt(areaID) === guest.areaID) {
                    guestCounter++
                }
            }

            window.alert(`There are ${guestCounter} in this area.`)
        }
    }
)
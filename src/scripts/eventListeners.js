import { getServiceArea } from "./Database.js"
import { getGuests } from "./Database.js"
import { getAreas } from "./Database.js"

const areaList = getAreas()
const guestList = getGuests()
const serviceAreaList = getServiceArea()

export const areaEventListener = () => {
    document.addEventListener("click",
        (onClick) => {
            const clickEvent = onClick.target
            let count = 0
            if (clickEvent.dataset.type === "area") {
                for (const obj of guestList) {
                    if (obj.areaId === parseInt(clickEvent.dataset.id)){
                        count++
                    }
                }
                window.alert(`There are ${count} guests in this area.`)
            }
        })

    }

export const serviceEventListener = () => {
    document.addEventListener("click", (event) => {
        const clickEvent = event.target;
        
        if (clickEvent.dataset.type === "service") {
            let areaArr = [];

            for (const obj of serviceAreaList) {
                if (obj.serviceId === parseInt(clickEvent.dataset.id)) {
                    const matchingAreas = areaList
                        .filter(area => area.id === obj.areaId)
                        .map(area => area.area);
                    areaArr.push(...matchingAreas);
                }
            }
            window.alert(`${clickEvent.dataset.name} is available in ${areaArr.join(", ")}`);
        }
    });
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
                    guest = guestItem;
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
                    const guestName = `${guest.firstName} ${guest.lastName}`
                window.alert(`${guestName} is located in ${area.area}`);
            }
        }
    });}


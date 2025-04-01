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


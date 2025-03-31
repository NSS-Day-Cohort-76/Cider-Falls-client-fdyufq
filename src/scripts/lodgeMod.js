import { getAreas, getServices, getServiceArea} from "./src/scripts/Database.js";

export const lodge = () => {
    let areaListHTML = "";
    const areas = getAreas();
    const services = getServices();
    const serviceAreas = getServiceArea();

for (const area of areas) {
    if (area.id === "1"); // this line chooses areaID number 1 -- this number will change depending on the area module 

    let serviceNames = "";
    for (const serviceArea of serviceAreas) {
        if (serviceArea.areaID === area.id) { // this line connects the serviceAreaID to the areaID
            for (const service of services) {
                if (service.id === serviceArea.serviceID) { // this line finds which services are associated with its respective area
                serviceNames += `${service.service};` // this line iterates the loops and returns a string
            }
        }
    }
}

        areaListHTML += `
                        <h2 class="area_title">${area.area}</h2>
                        <div>
                        Hotel + Restaurant <br>
                        Park Services: ${serviceNames}
                        </div>`;
    };

    return areaListHTML;
}; 
import { getAreas, getServices, getServiceArea} from "./src/scripts/Database.js";



export const areaName = () => {
    let areaListHTML = "";
    const lodge = getAreas();
    const services = getServices();

for (const lodge of areas) {
    let serviceNames = "";

    for (const service of services) {
        if (service.id === lodge.id) {
            serviceNames += `${service.service}, `;
        }
    }


        areaListHTML += `<section class="areaName">
                        <h2 class="area_title">${lodge.area}</h2>
                        <div class="business_address">
                        Hotel + Restaurat <br>
                        Park Services: ${serviceNames}
                        </div>
                        </section>`;
    };

    return areaListHTML;
};        
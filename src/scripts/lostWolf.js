import { getServices, getServiceArea } from "./Database.js";


export const lostWolfHTML = () => {
    let html=`<h2 data-type="area" data-id="2" >Lost Wolf Hiking Trail</h2>
    </div>
    <div class="services__section"> Park services: `
    const serviceArea = getServiceArea()
    const services = getServices()
    let serviceList = []
    for (const obj of serviceArea) {
        if (obj.areaId === 2)
            for (const service of services) {
                if (service.id === obj.serviceId)
                    serviceList.push(`<span data-name="${service.service}"
                data-type="service" data-id="${service.id}"> ${service.service}</span>`)
            }
        
    }
    html += `${serviceList.join(", ")}</div>`
    return html

}
import { getServices, getServiceArea } from "./Database.js";


export const ganderHTML = () => {
    let html=`<h2>Gander River</h2>
    <div class="services__section"> Park services: `
    const serviceArea = getServiceArea()
    const services = getServices()
    let serviceList = []
    for (const obj of serviceArea) {
        if (obj.areaId === 4)
            for (const service of services) {
                if (service.id === obj.serviceId)
                    serviceList.push(service.service)
            }
        
    }
    html += serviceList.join(", ")
    return html

}
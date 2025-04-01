import { getServices, getServiceArea } from "./Database.js";


export const lodgeHTML = () => {
    let html=`<h2>Lodge</h2>
    <h3>Hotel & Restaurant</h3>
    <div class="services__section"> Park services: `
    const serviceArea = getServiceArea()
    const services = getServices()
    let serviceList = []
    for (const obj of serviceArea) {
        if (obj.areaId === 1)
            for (const service of services) {
                if (service.id === obj.serviceId)
                    serviceList.push(service.service)
            }
        
    }
    html += serviceList.join(", ")
    return html

}
import { getServices, getServiceArea } from "./Database.js";


export const campgroundsHTML = () => {
    let html=`<h2>Campgrounds</h2>
    <h3>Office Park & Children Play Areas</h3>
    <div class="services__section"> Park services: `
    const serviceArea = getServiceArea()
    const services = getServices()
    let serviceList = []
    for (const obj of serviceArea) {
        if (obj.areaId === 5)
            for (const service of services) {
                if (service.id === obj.serviceId)
                    serviceList.push(service.service)
            }
        
    }
    html += serviceList.join(", ")
    return html

}
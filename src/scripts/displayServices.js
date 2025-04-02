import { getServices } from "./Database.js"

export const displayServicesHTML = () => {
    const services = getServices()
    let html = "Park services: "
    let serviceList = []
    for (const service of services) {
        serviceList.push(`<span data-type="service" 
            data-name="${service.service}" data-id="${service.id}"> ${service.service}</span>`)
    }
    html += `${serviceList.join(", ")}`
    
    return html
}
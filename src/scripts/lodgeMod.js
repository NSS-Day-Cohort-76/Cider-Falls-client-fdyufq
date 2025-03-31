import { getServices, getServiceArea } from "./Database.js";


export const lodge = () => {
    let html=`<h2>Lodge</h2>
    <br> Park services: `
    const serviceArea = getServiceArea()
    const services = getServices()

    for (const obj of serviceArea) {
        if (obj.areaId === 1)
            for (const service of services) {
                if (service.id === obj.serviceId)
                    html += `${service.service}, `
            }
        
    }
    return html

}
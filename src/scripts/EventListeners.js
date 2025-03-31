export const areaEventListener = () => {
document.addEventListener("click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target
        const areaID = itemClicked.dataset.id
        if (itemClicked.dataset.type === "area") {
            let guestCounter = 0
            const guests = getGuests()
            for (const guest of guests) {
                if(parseInt(areaID) === guest.areaID) {
                    guestCounter++
                }
            }

            window.alert(`There are ${guestCounter} in this area.`)
        }
    }
)
}

export const serviceEventListener = () => {
    
}

areaEventListener()
serviceEventListener()
const database = {
    areas: [
        {id: 1,
        area: "Lodge",
        },
        {id: 2,
        area: "Lost Wolf Hiking Trail",
        },
        {id: 3,
        area: "Chamfort River",
        },
        {id: 4,
        area: "Gander River",
        },
        {id: 5,
        area: "Campgrounds",
        },
        {id: 6,
        area: "Pine Bluffs Trails",
        },

    ],
    services: [
        {id: 1,
        service: "Canoeing",
        },
        {id: 2,
        service: "Fishing",
        },
        {id: 3,
        service: "Hiking",
        },
        {id: 4,
        service: "Information",
        },
        {id: 5,
        service: "Lodging",
        },
        {id: 6,
        service: "Parking",
        },
        {id: 7,
        service: "Picknicking",
        },
        {id: 8,
        service: "Rafting",
        },
        {id: 9,
        service: "Rock Climbing",
        },
        {id: 10,
        service: "Zip Lines",
        },
    ],
    serviceArea: [
        {id: 1, areaId: 1, serviceId: 5},
        {id: 2, areaId: 1, serviceId: 6},
        {id: 3, areaId: 1, serviceId: 4},
        {id: 4, areaId: 1, serviceId: 7},
        {id: 5, areaId: 2, serviceId: 3},
        {id: 6, areaId: 2, serviceId: 7},
        {id: 7, areaId: 2, serviceId: 9},
        {id: 8, areaId: 3, serviceId: 8},
        {id: 9, areaId: 3, serviceId: 1},
        {id: 10, areaId: 3, serviceId: 2},
        {id: 11, areaId: 4, serviceId: 2},
        {id: 12, areaId: 4, serviceId: 3},
        {id: 13, areaId: 5, serviceId: 4},
        {id: 14, areaId: 5, serviceId: 5},
        {id: 15, areaId: 5, serviceId: 6},
        {id: 16, areaId: 6, serviceId: 3},
        {id: 17, areaId: 6, serviceId: 7},
        {id: 18, areaId: 6, serviceId: 10},
    ],
    guests: [
            {id: 1, firstName: "Dave", lastName: "Wilkins", serviceId: 4, areaId: 3},
            {id: 2, firstName: "John", lastName: "Smith", serviceId: 6, areaId: 2},
            {id: 3, firstName: "Jane", lastName: "Johnson", serviceId: 8, areaId: 4},
            {id: 4, firstName: "Alice", lastName: "Williams", serviceId: 1, areaId: 4},
            {id: 5, firstName: "Bob", lastName: "Brown", serviceId: 6, areaId: 6},
            {id: 6, firstName: "Charlie", lastName: "Jones", serviceId: 10, areaId: 4},
            {id: 7, firstName: "David", lastName: "Miller", serviceId: 9, areaId: 6},
            {id: 8, firstName: "Emma", lastName: "Davis", serviceId: 8, areaId: 1},
            {id: 9, firstName: "Frank", lastName: "Garcia", serviceId: 8, areaId: 6},
            {id: 10, firstName: "Grace", lastName: "Rodriguez", serviceId: 2, areaId: 5},
            {id: 11, firstName: "Hank", lastName: "Martinez", serviceId: 4, areaId: 1},
            {id: 12, firstName: "Ivy", lastName: "Hernandez", serviceId: 5, areaId: 6},
            {id: 13, firstName: "Jack", lastName: "Lopez", serviceId: 4, areaId: 6},
            {id: 14, firstName: "Karen", lastName: "Gonzalez", serviceId: 8, areaId: 2},
            {id: 15, firstName: "Leo", lastName: "Wilson", serviceId: 6, areaId: 5},
            {id: 16, firstName: "Mona", lastName: "Anderson", serviceId: 6, areaId: 2},
            {id: 17, firstName: "Nathan", lastName: "Thomas", serviceId: 9, areaId: 2},
            {id: 18, firstName: "Olivia", lastName: "Taylor", serviceId: 5, areaId: 5},
            {id: 19, firstName: "Paul", lastName: "Moore", serviceId: 7, areaId: 5},
            {id: 20, firstName: "Quinn", lastName: "Jackson", serviceId: 2, areaId: 6},
            {id: 21, firstName: "Rachel", lastName: "Martin", serviceId: 6, areaId: 6},
            {id: 22, firstName: "Steve", lastName: "Lee", serviceId: 9, areaId: 6},
            {id: 23, firstName: "Tina", lastName: "Perez", serviceId: 10, areaId: 4},
            {id: 24, firstName: "Umar", lastName: "Thompson", serviceId: 5, areaId: 2},
            {id: 25, firstName: "Violet", lastName: "White", serviceId: 9, areaId: 4},
            {id: 26, firstName: "Walter", lastName: "Harris", serviceId: 9, areaId: 3},
            {id: 27, firstName: "Xena", lastName: "Sanchez", serviceId: 8, areaId: 2},
            {id: 28, firstName: "Yannis", lastName: "Clark", serviceId: 4, areaId: 6},
            {id: 29, firstName: "Zara", lastName: "Ramirez", serviceId: 6, areaId: 4},
            {id: 30, firstName: "Oscar", lastName: "Lewis", serviceId: 5, areaId: 3}
          ],
}

export const getAreas = () => {
    return structuredClone(database.areas)
}

export const getServices = () => {
    return structuredClone(database.services)
}

export const getServiceArea = () => {
    return structuredClone(database.serviceArea)
}

export const getGuests = () => {
    return structuredClone(database.guests)
}
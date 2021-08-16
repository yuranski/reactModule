function getCars() {
    return fetch('http://195.72.146.25/api/v1/cars').then(value => value.json())
}

function saveValueCars({model, price, year}) {
    return fetch(`http://195.72.146.25/api/v1/cars`, {
        method: 'POST',
        body: JSON.stringify({model: model, price: price, year: year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((value) => value.json())
        .then((json) => console.log(json))
}

export {getCars, saveValueCars}
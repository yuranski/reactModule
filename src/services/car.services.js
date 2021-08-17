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

function deletedCarId(id) {
    return fetch(`http://195.72.146.25/api/v1/cars/${id}`, {
        method: 'DELETE',
    });
}

function refresh(id,model,price,year) {
    return fetch(`http://195.72.146.25/api/v1/cars/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            model: model,
            price: price,
            year: year
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

export {getCars, saveValueCars, deletedCarId, refresh}










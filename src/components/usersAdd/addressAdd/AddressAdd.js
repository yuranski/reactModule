import {UsersGeo} from "./usersGeo/UsersGeo";

export function AddressAdd({street, suite, city, zipcode, addressGeoLat, addressGeoLng}) {

    return (
        <div>
            <p>{street}</p>
            <p>{suite}</p>
            <p>{city}</p>
            <p>{zipcode}</p>
            <UsersGeo lat={addressGeoLat.lat}
                      lng={addressGeoLng.lng}/>
        </div>
    );
}
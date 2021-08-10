// Взяти масив usersList.
//     Створити компонент,котрий характеризує юзера.
//     Створити компонент,котрий характеризує підоб'єкт юзера address. Використати в компоненті юзера.
// Створити компонент,котрий характеризує підоб'єкт адреси юзера geo. Використати в компоненті адреси.
// Вкладеність компонентів : App->Users->User->Address->Geo
// Вивести всі об'єкти з масиву


import {AddressAdd} from "./addressAdd/AddressAdd";

export function UsersAdd({
                             id,
                             name,
                             username,
                             email,
                             addressStreet,
                             addressSuite,
                             addressCity,
                             addressZipcode,
                             addressGeoLat,
                             addressGeoLng
                         }) {

    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <AddressAdd
                street={addressStreet}
                suite={addressSuite}
                city={addressCity}
                zipcode={addressZipcode}
                addressGeoLat={addressGeoLat}
                addressGeoLng={addressGeoLng}
            />
        </div>
    );
}
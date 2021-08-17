import {useEffect, useState} from "react";
import {Car} from "../car/Car";
import {deletedCarId, getCars, refresh, saveValueCars} from "../../services/car.services";
import './carForm.css';

export function CarsForm() {

    let [cars, setCars] = useState([])

    let [model, setModels] = useState([])
    let [price, setPrice] = useState([])
    let [year, setYear] = useState([])

    let [value, setValue] = useState({model: '', price: '', year: ''})

    let [lastIndexArr, setLastIndexArr] = useState([])

    useEffect(() => {
        getCars().then(value => {
            setCars([...value])
            setLastIndexArr([...value])
        })
    }, [])

    const [disableModel, setDisableModel] = useState(true);
    const [disablePrice, setDisablePrice] = useState(true);
    const [disableYear, setDisableYear] = useState(true);
    const [editFlag, setEditFlag] = useState(true);

    const onSubForm = (e) => {
        // e.preventDefault()
        let tempValue = {model, price, year}
        setValue({...tempValue})
        saveValueCars(tempValue).then()
    }

    const onInputChangeModel = (e) => {
        setValModel([model])
            if (e.target.value.length <= 20 && e.target.value.length >= 1) {
                setDisableModel(false)
                setModels(e.target.value)
                e.target.className = "errorValidGreen"
            } else {
                setDisableModel(true)
                e.target.className = "errorValidRed"
            }
    }
    const onInputChangePrice = (e) => {
        setValPrice([price])
            if (e.target.value > 0) {
                setDisablePrice(false)
                setPrice(e.target.value)
                e.target.className = "errorValidGreen"
            } else {
                setDisablePrice(true)
                e.target.className = "errorValidRed"
            }
    }
    const onInputChangeYear = (e) => {
        setValYear([year])
            if (e.target.value >= 1990 && e.target.value <= 2021) {
                setDisableYear(false)
                setYear(e.target.value)
                e.target.className = "errorValidGreen"
            } else {
                setDisableYear(true)
                e.target.className = "errorValidRed"
            }
    }

    function deleted(id) {
        deletedCarId(id).then()
    }


    let [valId, setValId] = useState([]);
    let [valModel, setValModel] = useState([]);
    let [valPrice, setValPrice] = useState([]);
    let [valYear, setValYear] = useState([]);

    let [colorEdit, setColorEdit] = useState([])

    function edit(id, model, price, year) {

        setEditFlag(true)

        let idEditBtn = document.getElementById(id)
        let green1 = document.getElementById('green1')
        let green2 = document.getElementById('green2')
        let green3 = document.getElementById('green3')

        setColorEdit([idEditBtn.className = 'errorValidGreen'])
        setColorEdit([green1.className = 'errorValidGreen'])
        setColorEdit([green2.className = 'errorValidGreen'])
        setColorEdit([green3.className = 'errorValidGreen'])

        setValId([id])
        setValModel([model])
        setValPrice([price])
        setValYear([year])
    }

    function changeBtn() {
        refresh(valId, model, price, year).then()
    }

    return (
        <div>
            <div className={'dispFlex'}>
                <form onSubmit={onSubForm}>
                    <input id='green1' defaultValue={valModel} type="text" name={model} onInput={onInputChangeModel}
                           placeholder="Модель машини"/>
                    <input id='green2' defaultValue={valPrice} type="text" name={price} onInput={onInputChangePrice}
                           placeholder="Ціна машини"/>
                    <input id='green3' defaultValue={valYear} type="text" name={year} onInput={onInputChangeYear}
                           placeholder="Рік машини"/>
                    <button disabled={disableModel || disablePrice || disableYear || editFlag}>Submit</button>
                </form>
                <button onClick={() => changeBtn()}>Change</button>
            </div>

            {cars.filter(value => value.id > lastIndexArr.length + 75)
                .map(value => <Car key={value.id}
                                   id={value.id}
                                   model={value.model}
                                   price={value.price}
                                   year={value.year}
                                   deleted={deleted}
                                   edit={edit}/>)}
        </div>
    )
}
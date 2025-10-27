import { useLocalStorage, useLocalStorageWithSetGet } from '.'

const StorageInput = () => {
    const [name, setName] = useLocalStorage('localNameKey', '')
    const {
        value: city,
        setItem,
        getItem,
    } = useLocalStorageWithSetGet('localCityKey', '')
    return (
        <div>
            <div>
                <label>useLocalStorage Example</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>useLocalStorageWithSetGet Example</label>
                <input value={city} onChange={(e) => setItem(e.target.value)} />
            </div>
            <button
                onClick={() => {
                    alert(getItem())
                }}
            >
                Get City
            </button>
        </div>
    )
}

export default StorageInput

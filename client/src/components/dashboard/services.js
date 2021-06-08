import axios from "axios"

const baseUrl = "http://localhost:3010/data"


const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getBuilding = bid => {
    const request = axios.get(baseUrl + `/${bid}` )
    return request.then(response => [response.data])
}


const update = (newEntry) =>{
    const request = axios.post(baseUrl, newEntry)
    return request.then(response => response.data)
}

const updateBuilding = (bid, entry) => {
    const request = axios.put(baseUrl + `/${bid}`,entry)

    return request.then(response => response.data)
}


const deletion = entryId =>{
    const request = axios.delete(baseUrl + `/${entryId}`)
    return request.then(response => response.data)
}

const deleteAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)

}

export default {getAll, update, deletion, deleteAll, getBuilding, updateBuilding}
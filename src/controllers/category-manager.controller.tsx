// export const searchCategories =  () : Promise<any> => {
//     return fetch("https://api.tutorialinaja.tech/catm/v1/category")
//     .then(res => res.json())
// }

// mock api
const categories = [
    {
        "updated_at": "2019-09-19T09:44:35+00:00",
        "created_at": "2019-09-19T09:44:35+00:00",
        "description": "Movie Action",
        "id": "73603c73-6936-4009-9da3-95d1e26a54d0",
        "name": "Action"
    },
    {
        "updated_at": "2019-09-19T09:47:28+00:00",
        "created_at": "2019-09-19T09:47:28+00:00",
        "description": "Semua Video Tutorial Tentang Tema Pendidikan",
        "id": "e34c1d9e-9b20-4141-89c8-57b58517b1c8",
        "name": "Pendidikan"
    }
];

export const searchCategories =  () : Promise<any> => {
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve(categories)
            }, 2000)
                
        })
}
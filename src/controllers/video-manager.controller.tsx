import { UserModel, VideoModel, PlaylistModel } from "../models/video-upload.model";

export const VIDEO_UPLOAD_URL =  "https://api.tutorialinaja.tech/vidu/v1/upload";


// export const createNewUser = (payload :UserModel) => {    
//    return fetch("https://api.tutorialinaja.tech/upa/v1/user/store", {
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         method: "POST",
//         body: JSON.stringify(payload)
//     })
//     .then(res => res.json())
// }

export const saveVideo = (payload :VideoModel) => {
    return fetch("https://private-anon-8eff540bc7-vam58.apiary-mock.com/vam/v1/storemetadata", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
}

export const savePlaylistCategory = (payload :PlaylistModel) => {
    return fetch("https://api.tutorialinaja.tech/pm/v1/category/create", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
}

export const savePlaylist = (userid :string, metadataid :string, categoryid :string) => {
    return fetch(`https://api.tutorialinaja.tech/pm/v1/playlists/${userid}/create`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({metadataid,categoryid})
    })
    .then(res => res.json())
}

export const uploadVideo = (payload :string) => {
    return fetch("https://private-anon-8eff540bc7-vam58.apiary-mock.com/vam/v1/upload", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: payload
    })
    .then(res => res.json())
}

export const getCategories = () => {
    return fetch("https://api.tutorialinaja.tech/catm/v1/category")
            .then(res => res.json());
}
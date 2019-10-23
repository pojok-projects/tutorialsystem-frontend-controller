import Axios from "axios";
import { baseUrl } from "./base-url";
import { CategoryModel } from "../models/CategoryModel";

export const createCategory = (category :CategoryModel) => {
    return Axios.post(baseUrl + "/catm/v1/category", category)
}

export const updateCategory = (category :CategoryModel) => {
    return Axios.put(baseUrl + "/catm/v1/category/update/"+ category.category_id, category)
}

export const deleteCategory = (category_id :string) => {
    return Axios.put(baseUrl + "/catm/v1/category/delete/id"+ category_id)
}

export const getCategories = () => {
    return Axios.get(baseUrl + "/catm/v1/category")
}

export const getCategoryById = (category_id :string) => {
    return Axios.get(baseUrl + "/catm/v1/category/"+ category_id)
}

export const searchCategoriesByName = (name :string) => {
    return Axios.get(baseUrl + "/catm/v1/category/search?name="+ name)
}



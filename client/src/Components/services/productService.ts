const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

export const getProducts = async () => {
    const response = await fetch(`${API_BASE_URL}/products`)
    if (!response.ok) {
        throw new Error("Network response was not ok")
    }
    return await response.json()
}
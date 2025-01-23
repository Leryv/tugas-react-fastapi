import api from "../api.js";

const methodFruit = () => {
    const addFruit = async (data) => {
        try {
            await api.post('/fruits', data);
            await getFruits();
        } catch (err) {
            console.error("Failed to add Fruit", err);
        }
    }

    const getFruits = async () => {
        try {
            const response = await api.get('/fruits');
            console.log(response)
            return response.data;
        } catch (e) {
            console.error("Failed to get Fruits", e);
        }
    }
    return {addFruit, getFruits}
}
export default methodFruit


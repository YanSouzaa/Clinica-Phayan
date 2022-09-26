import * as dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.TRANSACTIONAL_API_ENDPOINT;

const transactionalDbService = {
    getSchedules: async () => {
        return await axios.get(API_URL);
    }
}
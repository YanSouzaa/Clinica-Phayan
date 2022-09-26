import axios from "axios";
import env from 'react-dotenv'
import Schedule from "../components/Schedule";


const API_URL = env.TRANSACTIONAL_API_ENDPOINT;

const transactionalDbService = {
    getSchedules: async () => {
        return await axios.get(API_URL + '/schedules');
    },

    addSchedule: async (schedule) => {
        return await axios.post(API_URL + '/schedule',schedule);
    },
}
export default transactionalDbService;
import axios from "axios";
import env from 'react-dotenv'



const API_URL = env.TRANSACTIONAL_API_ENDPOINT;

const transactionalDbService = {
    getSchedules: async () => {
        return await axios.get(API_URL + '/schedules');
    },

    addSchedule: async (schedule) => {
        return await axios.post(API_URL + '/schedule',schedule)
        ;
    },

    getDoctors: async () => {
        return await axios.get(API_URL + '/doctors');
    },
    addDoctor: async (doctor) => {
        return await axios.post(API_URL + '/doctor',doctor)
        ;
    },
    getPatients: async () => {
        return await axios.get(API_URL + '/patients');
    },
    addPatient: async (patient) => {
        return await axios.post(API_URL + '/patient',patient)
        ;
    },
}
export default transactionalDbService;
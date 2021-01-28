import dotenv from 'dotenv'
dotenv.config({path: '', debug: true})

export const {
    API_PORT,
    API_HOST
} = process.env
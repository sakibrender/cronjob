import cron from 'node-cron';
import axios from 'axios';

const URL = "https://sohojogi-server.onrender.com/test"
cron.schedule('* * * * *', async () => {
    try {
        const response = await axios.get(URL);
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error making GET request:', error);
    }
});


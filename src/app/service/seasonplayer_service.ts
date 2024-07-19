export const fetchSeasonPlayers = async () => {
    try {
        const response = await fetch('https://tsportapi.azurewebsites.net/api/seasonplayers', { cache: 'no-store' });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        return data;

    } catch (error) {
        console.error(`Error: ${error}`);
    }  
};
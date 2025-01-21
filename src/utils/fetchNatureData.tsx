export const fetchNatureData = async () => {
    try {
        const response = await fetch('https://run.mocky.io/v3/67899179-723c-49ca-a5b9-8781d2bec10a');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error: ', error);
        throw error;
    }
};
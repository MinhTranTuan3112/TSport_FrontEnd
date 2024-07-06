export const fetchPagedShirts = async (page: number = 1, pageSize: number = 10) => {
    const response = await fetch(`http://localhost:8080/api/shirts?pageNumber=${page}&pageSize=${pageSize}`);
    const data = await response.json();
    console.log(`Shirts data:`);
    console.log({data});
    return data;
};
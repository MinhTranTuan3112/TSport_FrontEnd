export const fetchPagedShirts = async (page: number = 1, pageSize: number = 10) => {
    const response = await fetch(`http://localhost:8080/api/shirts?pageNumber=${page}&pageSize=${pageSize}`);
    const data = await response.json();
    console.log(`Shirts data:`);
    console.log({ data });
    return data;
};

export const fetchShirtDetails = async (id: number) => {
    const response = await fetch(`http://localhost:8080/api/shirts/${id}`);
    const data = await response.json();
    console.log(`Shirt details:`);
    console.log({ data });
    return data;
};
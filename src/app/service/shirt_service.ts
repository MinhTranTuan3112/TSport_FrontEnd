export const fetchPagedShirts = async (page: number = 1, pageSize: number = 10, clubIds: number[] = []) => {
    let url = `http://localhost:8080/api/shirts?pageNumber=${page}&pageSize=${pageSize}`;

    if (clubIds.length > 0) {
        clubIds.forEach((clubId) => {
            url += `&clubId=${clubId}`;
        });
    }

    console.log(`Fetching shirts from: ${url}`);    
    
    const response = await fetch(url);
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
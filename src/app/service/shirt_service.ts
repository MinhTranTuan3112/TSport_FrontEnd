export const fetchPagedShirts = async ({ page = 1, pageSize = 10, clubIds = [],
    playerIds = [],
    seasonIds = [],
    startPrice = null,
    endPrice = null,
    sortColumn = 'id',
    orderByDesc = true
}: QueryPagedShirtRequest) => {
    let url = `http://localhost:8080/api/shirts?pageNumber=${page}&pageSize=${pageSize}&sortColumn=${sortColumn}&orderByDesc=${orderByDesc}`;

    if (clubIds.length > 0) {
        clubIds.forEach((clubId) => {
            url += `&clubId=${clubId}`;
        });
    }

    if (seasonIds.length > 0) {
        seasonIds.forEach((seasonId) => {
            url += `&seasonId=${seasonId}`;
        });
    }

    if (playerIds.length > 0) {
        playerIds.forEach((playerId) => {
            url += `&playerId=${playerId}`;
        });
    }

    if (startPrice) {
        url += `&startPrice=${startPrice}`;
    }

    if (endPrice) {
        url += `&endPrice=${endPrice}`;
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
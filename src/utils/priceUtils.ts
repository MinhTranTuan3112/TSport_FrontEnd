function formatPrice(number: number): string {
    return number.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).replace(/,/g, '.');
}
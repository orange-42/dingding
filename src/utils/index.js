/**
 * @description 获取日期 年月日 时分秒
 */
export function getDate(dateTime) {
    const date = new Date(dateTime);

    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate
}

/**
 * @description 获取月份或者天
 */
export function getDayOrMonth(str) {
    if (!str) return 0
    if (str.charAt(0) === '0') {
        return Number(str[1])
    }
    return Number(str)
}
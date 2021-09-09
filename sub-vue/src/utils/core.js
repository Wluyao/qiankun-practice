//获取指定范围内的随机数
export const random = (min = 0, max = 10000) => {
    const choice = max - min + 1
    return Math.floor(min + Math.random() * choice)
}

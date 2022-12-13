export const fetchImage = (searchQuerry, page) => {
    return fetch(`https://pixabay.com/api/?q=${searchQuerry}&page=${page}&key=30545528-143ee6a3dc060094e4755846c&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(
            new Error(`По запросу ${searchQuerry} ничего не найдено.`)
        )
    })
};
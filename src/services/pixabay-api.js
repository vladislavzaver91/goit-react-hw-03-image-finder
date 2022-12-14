export const fetchImage = (searchQuerry, page) => {
    const baseURL = 'https://pixabay.com/api/';
    const KEY = '30545528-143ee6a3dc060094e4755846c';

    return fetch(`${baseURL}?q=${searchQuerry}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(
            new Error(`По запросу ${searchQuerry} ничего не найдено.`)
        )
    })
};
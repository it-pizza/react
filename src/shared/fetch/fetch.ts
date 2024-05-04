export function fetchData(url: string) {
    return fetch(url).then(res => res.json())
        .catch(error => console.error(error))
}


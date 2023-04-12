class DataSource {
    static searchComputer(keyword){
        return fetch('https://comppart.com/category/${keyword}')
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson) {
                return Promise.resolve(responseJson);
            }else{
                return Promise.reject(`&{keyword} is not found`);
            }
        });
    }
}

export default DataSource;
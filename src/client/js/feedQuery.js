import 'whatwg-fetch';

const GetOffers = (itemCountToSkip, callback) => {
    const url = `main/offersbybatch?itemCountToSkip=${itemCountToSkip}`;

    fetch(
        url,
        {
            headers: 
                new Headers({
                    "Accept": "application/json"
                })
        }
    )
    .then(response => response.json())
    .then(items => callback(items));
}

module.exports = GetOffers;
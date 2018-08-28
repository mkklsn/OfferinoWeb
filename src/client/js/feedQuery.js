import 'whatwg-fetch';

const GetOffers = async (itemCountToSkip) => {
    const url = `main/offersbybatch?itemCountToSkip=${itemCountToSkip}`;

    let offerPromise = await fetch(
        url,
        {
            headers: 
                new Headers({
                    "Accept": "application/json"
                })
        }
    );

    return await offerPromise.json();
}

module.exports = GetOffers;
import axios from '../../boot/axios';

// import queryString from 'query-string';
export async function fetchImages(context, {params} ) {
     var queryParams = {}
     if( Object.keys(params).length) {
         queryParams = {
             q: params.q && params.q.value,
             image_type: params.image_type && params.image_type.value,
             category: params.category && params.category.value
         }
     }
    // Fetch images from the server
    await axios.post('photos',  {queryParams})
        .then(response => {
            if (response) {
                return response.data
            }
        })
        .then(result => {
            context.commit('SET_IMAGES', result.data)
            context.commit('SET_EXPIRES_AT', result.expires_at)
        })
        .catch(error => {
            console.error('Failed to get data from the server', error);
        });
}
export async function fetchSavedPhotos(context) {
    await axios.get('saved')
        .then(response => {
            context.commit('SET_IMAGES', response.data.data)
        })
        .catch(error => {
        console.log('err', error)
    })
}
export async function saveImage(context, {image}) {
    var image_id = image.id
    await axios.post('save', {image_id})
        .then(response => {
            if (response) {
                console.log(response)
            }
        }).catch(err => console.log(err))
}

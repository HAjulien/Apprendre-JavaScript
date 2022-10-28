/**
 * Interagir une API JSON
 * @param {string} url 
 * @param {Request & {json?: object}} options 
 */

export async function fetchJSON (url, options = {}){
    const headers = { Accept: 'application/json', ...options.headers}
    if (options.json){
        options.body = JSON.stringify(options.json)
        headers['Content-Type'] = 'application/json'
    }
    const res = await fetch(url, {...options, headers})
    if (!res.ok){
        throw new Error('Erreur serveur', {cause: res})
    }
    return await res.json()

}
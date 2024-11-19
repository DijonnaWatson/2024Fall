const API_URL = 'http://localhost:3000/api/v1'

/**pass a url, what it passes is what's almost on the other side of the url
 * with an exception, not really returning the url,its asynchronous so it returns a promise
 */
export function rest<T>(url: string): Promise<T> {
  return fetch(url).then((x) => x.json())//get a promise of any
}

//if call rest have to pass the whole function but if call api just have to call the name
export function api<T>(url:string){
  return rest<T>(API_URL+url)
}
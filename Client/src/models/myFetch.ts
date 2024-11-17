/**pass a url, what it passes is what's almost on the other side of the url
 * with an exception, not really returning the url,its asynchronous so it returns a promise
 */
export function rest<T>(url: string): Promise<T> {
  return fetch(url).then((x) => x.json())//get a promise of any
}
// export async function rest(url:string){
//     const data  = await fetch(url)
//     return await data.json()
// }
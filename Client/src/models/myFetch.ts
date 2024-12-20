const API_URL = 'http://localhost:3000/api/v1/'

/**pass a url, what it passes is what's almost on the other side of the url
 * with an exception, not really returning the url,its asynchronous so it returns a promise
 */
// export function rest<T>(url: string): Promise<T> {
//   return fetch(url).then((x) => x.json())//get a promise of any
// }

export function rest<T>(url: string, data?: any, method?: string, headers ): Promise<T> {
  return fetch(url, {
    method: method ?? (data ? 'POST' : 'GET'),
    headers: {
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : undefined
  }).then((x) => x.json())
}

//if call rest have to pass the whole function but if call api just have to call the name
export function api<T>(url: string, data?: any, method?: string): Promise<T> {
  return rest<T>(API_URL + url, data, method)
}

//loads script
export async function loadScript(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    //querySelector checks if the script tag is already in the html and just returns
    if (document.querySelector(`script[src="${url}"]`)) {
      resolve()
      return
    }
    //creating a script tag in the html and set properties on it
    const script = document.createElement('script')
    script.src = url//set the src of the script tag to the url
    script.onload = () => resolve()//whenever the script is loaded, resolve the promise
    script.onerror = (err) => reject(err)//if there is an error, reject the promise
    document.head.appendChild(script)//append the script tag to the head of the html document
  })
}

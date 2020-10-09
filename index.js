//Sub Domain: https://static.ycasey71.workers.dev/


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('<html><body><h1>Hello Welcome to the Serverless Site!!!!</h1><br><h2>Site Under Construction Thanks!!</h2></body></html>', {
    headers: { 'content-type': 'text/html' },
  })
}

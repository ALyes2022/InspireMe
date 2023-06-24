import sanityClient from '@sanity/client';
import imageUrlbuilder from '@sanity/image-url';


export const client = sanityClient({
  projectId: '7sbq2m0s', //from the sanity dashboard
  dataset: 'production',
  apiVersion: '2023-06-17',
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: 'skXD2mKJkv91rPTigcQJqNBTaqvs3O7JNT2t7XF5C43TjapXBmlMNOMkoBUMpt4eNYcweTBeqcRbvVEdpyibg1Y5phkK0tGW2lvN8gZMPQKKxRFrrY6TKEfbvAAhGkTEAz08Ek5QAuqiChtsledG7ldUS5XbU9oCuOZZWMfjrIWoxTw8NRGU', //api token generated from Sanity dashboard https://www.sanity.io/help/js-client-browser-token
});

//Documentacja z Sanity https://www.sanity.io/docs/connect-your-content-to-next-js // https://www.sanity.io/docs/api-versioning // https://www.sanity.io/docs/js-client

const builder = imageUrlbuilder(client);
export function urlFor(source) {
  return builder.image(source)
}

//documentacja z sanity: https://www.sanity.io/docs/image-url



import axios from 'axios'
import unzipper from 'unzipper'

const ORYX_GRAPHQL_URL = 'https://oryx.zsa.io/graphql'

export async function getKeymapSourceLink(hashId, revisionId = 'latest') {
//   const query = `
// query getLayout($hashId: String!, $revisionId: String!, $geometry: String) {
//   Layout(hashId: $hashId, geometry: $geometry, revisionId: $revisionId) {
//     revision {
//       zipUrl
//     }
//   }
// }`
//   const { data } = await axios.post(ORYX_GRAPHQL_URL, {
//     operationName: 'getLayout',
//     variables: {
//         hashId,
//         geometry: 'moonlander',
//         revisionId,
//     },
//     query,
//   })
//   console.log(data)
//   return data.data.Layout.revision.zipUrl
     return 'https://oryx.zsa.io/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMmtqUVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a8b6ff3eff20ea97043098712864fce2bc7925ae/moonlander_tranquility-base_7Q97w_Zo0Yr.zip'
}

export async function unzipKeymapSource(url, path) {
  const response = await axios({
    method: 'get',
    url,
    responseType: 'stream'
  })
  const unzip = unzipper.Extract({ path })
  return response.data.pipe(unzip).promise()
}


export async function downloadKeymapSource(layoutHashId, path) {
  const zipUrl = await getKeymapSourceLink(layoutHashId)
  await unzipKeymapSource(zipUrl, path)
  console.log('Downloaded layout', layoutHashId, 'from', zipUrl)
}

if (typeof require !== 'undefined' && require.main === module) {
  const hashId = process.argv[2] || process.env.LAYOUT_ID || '7Q97w'
  downloadKeymapSource(hashId, process.env.LAYOUT_DIR || './layout_src')
}

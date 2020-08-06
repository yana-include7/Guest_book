import { HTTP } from './common'
export const Note = {
  create (config) {
    console.log('полученные данные ...')
    console.log(config)
    return HTTP.post('/notes/', config).then(response => {
      console.log('принятые данные ...')
      console.log(response.data)
      return response.data
    })
  },
  delete (note) {
    return HTTP.delete(`/notes/${note.id}/`)
  },
  list () {
    return HTTP.get('/notes/').then(response => {
      return response.data
    })
  }
}

import http from '../assets/lib/http'

const index = {

    state: {
        playlist: {},
        albunmList: {}
    },
    mutations: {
        async getPlayList (state) {
            let res = await http.get('/top/playlist')
            state.playlist = res.data
        },

        async getPlayAlbum (state) {
            let res = await http.get('/top/album')
            state.albunmList = res.data
        }
    },
    actions: {
        getPlayList (context) {
            context.commit('getPlayList')
        },
        getPlayAlbum (context) {
            context.commit('getPlayAlbum')
        }
    },

    getters: {

    }

}
export default index
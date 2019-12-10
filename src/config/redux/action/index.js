import axios from 'axios'

const http = 'http://192.168.137.1/desakedung1/public/api'
const header = (token) =>{
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({
            type: 'CHANGE_USER',
            value: 'Heraya Fitra'
        });
    }, 2000);
}

export const setUserLogin = (data) => (dispatch) => {
    dispatch({
        type: 'CHANGE_ISLOGIN',
        value: data
    })
}

export const setUserData = (data) =>(dispatch)=>{
    dispatch({
        type: 'CHANGE_USER',
        value : data
    })
}

export const loginUserAPI = (data) => (dispatch)=>{
    dispatch({
        type: 'CHANGE_LOADING',
        value: true
    })
    return new Promise((resolve,reject)=>{
        axios.post(http+'/login', {
            nik: data.nik,
            password: data.kataSandi
        })
        .then(function (response) {
            resolve(response.data)
            dispatch({
                type: 'CHANGE_LOADING',
                value: false
            })
        })
        .catch(function (error) {
            reject(error.response.data)
            dispatch({
                type: 'CHANGE_LOADING',
                value: false
            })
        });
        
    })
}
export const setUserAPI = (data) => (dispatch, getState)=>{
    const headers = header(getState().user.api_token)
    dispatch({
        type: 'CHANGE_LOADING',
        value: true
    })
    return new Promise((resolve,reject)=>{
        axios.put(http+'/user/'+data.nik, {
            email: data.email,
            no_hp: data.no_hp,
            password: data.password
        }, headers)
        .then(function (response) {
            resolve(response.data)
            dispatch({
                type: 'CHANGE_LOADING',
                value: false
            })
        })
        .catch(function (error) {
            reject(error.response.data)
            dispatch({
                type: 'CHANGE_LOADING',
                value: false
            })
        });
        
    })
}
export const getUserAPI = (data) => (dispatch,getState)=>{
    const headers = header(getState().user.api_token)
    return new Promise((resolve,reject)=>{
        axios.get(http+'/user/'+data.nik, headers)
        .then(function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
            reject(error)
        });
        
    })
}

//Aduan
export const getAduanAPI = (data) => (dispatch,getState)=>{
    const headers = header(getState().user.api_token)
    return new Promise((resolve,reject)=>{
        axios.get(http+'/aduan',headers)
        .then(function (response) {
            console.log(response.data.data[0].file[0].file)
            resolve(response.data)
        })
        .catch(function (error) {
            reject(error)
        });
        
    })
}
export const getJenisAduanAPI = (data) => (dispatch,getState)=>{
    const headers = header(getState().user.api_token)
    return new Promise((resolve,reject)=>{
        axios.get(http+'/aduan/jenis',headers)
        .then(function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
            reject(error)
        });
        
    })
}

export const postAduanAPI = (data) => (dispatch,getState)=>{
    const headers = header(getState().user.api_token)
    dispatch({
        type: 'CHANGE_LOADING',
        value: true
    })
    return new Promise((resolve,reject) => {
        axios.post(http+'/aduan', {
            nik: data.nik,
            jenisAduan: data.jenisAduan,
            lampiran: data.lampiran,
            komentar: data.komentar
        }, headers)
        .then(function (response) {
            resolve(response.data)
            dispatch({
                type: 'CHANGE_LOADING',
                value: false
            })
        })
        .catch(function (error) {
            reject(error.response.data)
            dispatch({
                type: 'CHANGE_LOADING',
                value: false
            })
        });
        
    })
}
//Aduan END
//Pelayanan
export const getJenisPelayananAPI = (data) => (dispatch, getState)=>{
    const headers = header(getState().user.api_token)
    return new Promise((resolve,reject)=>{
        axios.get(http+'/pelayanan/jenis', headers)
        .then(function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
            reject(error)
        });
        
    })
}

export const postPelayananAPI = (data) => (dispatch, getState)=>{
    const headers = header(getState().user.api_token)
    dispatch({
        type: 'CHANGE_LOADING',
        value: true
    })
    return new Promise((resolve,reject) => {
        axios.post(http+'/pelayanan', {
            nik: data.nik,
            jenisPelayanan: data.jenisPelayanan,
            lampiran: data.lampiran,
            komentar: data.komentar
        }, headers)
        .then(function (response) {
            resolve(response.data)
            dispatch({
                type: 'CHANGE_LOADING',
                value: false
            })
        })
        .catch(function (error) {
            reject(error.response.data)
            dispatch({
                type: 'CHANGE_LOADING',
                value: false
            })
        });
        
    })
}
//Pelayanan END

//Bantuan
export const getJenisBantuanAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.get(http + '/desakedung/api/jenisBantuan', {
                params: {
                    'DESA-KEY': 'desa123'
                }
            })
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error)
            });

    })
}

export const getSoalBantuanAPI = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        axios.get(http + '/desakedung/api/bantuan/soal', {
                params: {
                    id: data.id,
                    'DESA-KEY': 'desa123'
                }
            })
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error)
            });

    })
}


export const postBantuanAPI = (data) => (dispatch) => {
    dispatch({
        type: 'CHANGE_LOADING',
        value: true
    })
    return new Promise((resolve, reject) => {
        axios.post(http + '/desakedung/api/bantuan', {
                'DESA-KEY': 'desa123',
                nik: data.nik,
                jenisBantuan: data.jenisBantuan,
                lampiran: data.lampiran,
                komentar: data.komentar
            })
            .then(function (response) {
                resolve(response.data)
                dispatch({
                    type: 'CHANGE_LOADING',
                    value: false
                })
            })
            .catch(function (error) {
                reject(error.response.data)
                dispatch({
                    type: 'CHANGE_LOADING',
                    value: false
                })
            });

    })
}
//Bantuan END
const dataBook = require('../models/data')

exports.getAll = (req, res, next) => {
    return res.status(200).json({ status: 'Success', data: dataBook },)
}

exports.getByid = (req, res, next) => {
    const { id } = req.params
    let dataById = dataBook.find((val) => parseInt(val.id) === parseInt(id))
    if (dataById) {
        return res.status(200).json({ status: 'Success', message: 'Berhasil Menampilkan Data', data: dataById },)
    }
    return res.status(422).json({ status: 'success', message: 'id tidak ditemukan', data: dataById },)
}

exports.getByJenis = (req, res, next) => {
    const { jenis } = req.params
    let cekJenis = dataBook.filter((val) => jenis === val.type)
    if (cekJenis.length !== 0) {
        return res.status(200).json({ status: 'Success', message: 'Berhasil Menampilkan Data', data: cekJenis },)
    }
    return res.status(422).json({ status: 'success', message: 'Jenis tidak ditemukan', data: cekJenis },)
}

exports.store = (req, res, next) => {
    const { name, type } = req.body
    dataBook.push({ id: dataBook.length + 1, name: name, type: type })
    return res.status(200).json({ status: 'Success', message: 'Berhasil Menambahkan Data', data: dataBook })
}

exports.destroy = (req, res, next) => {
    const { id } = req.params
    const cekId = dataBook.find(val => parseInt(val.id) === parseInt(id))
    if (cekId) {
        let dataHapus = dataBook.filter(values => parseInt(values.id) !== parseInt(id))
        return res.status(200).json({ status: 'Success', message: 'Berhasil Menghapus Data', data: dataHapus })
    }
}

exports.put = (req, res, next) => {
    const { id } = req.params
    const { name, type } = req.body
    const cekId = dataBook.find((val) => parseInt(val.id) === parseInt(id))
    if (cekId) {
        const dataUpdate = { id: parseInt(id), name: name ?? cekId.name, type: type ?? cekId.type }
        for (let index = 0; index < dataBook.length; index++) {
            if (parseInt(dataBook[index].id) === parseInt(id)) {
                console.log('bisa harusnya', dataUpdate);
                dataBook[index] = dataUpdate
            }
        }
        return res.status(200).json({ status: 'Success', message: 'Berhasil Mengupdate Data', data: dataBook })
    }
    return res.status(422).json({ status: 'success', message: 'id tidak ditemukan' },)
}
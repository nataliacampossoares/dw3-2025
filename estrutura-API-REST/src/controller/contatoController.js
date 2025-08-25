import contatos from "../model/contatoModel.js";


function getContatos(req, res) {
    res.status(200).json(contatos)
}




function getContatoById(req, res) {

    // const id = req.params["id"]
    // const id = req.params.id
    const { id } = req.params

    // const contato = contatos.find((elemento)=>{
    //     if (elemento.id == id){
    //         return true
    //     } else {
    //         return false
    //     }
    // })

    const contato = contatos.find((elemento)=>elemento.id == id)

    if (!contato) {
        res.status(404).json({message:'Contato não encontrado'})
    }

    res.status(200).json(contato)
}


export {
    getContatos,
    getContatoById
}
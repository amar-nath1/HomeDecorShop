import React, { useContext } from "react"
import axios from "axios"
import AuthContext from "./auth-context"


const PostCrudContext = React.createContext({
    addToCrud: (itemObj) => { }
})

export const PostCrudProvider = (props) => {

    let authCtx = useContext(AuthContext)

    const addItemToCrud = (itemToAdd, remORdec) => {

        

        let userEmailActual = authCtx.email
        let userEmail = userEmailActual.replace(/\W/g, '')

        let postUrl = `https://crudcrud.com/api/651b072f0c3343d4a2a5d8760cd2c5b7/cart${userEmail}`

        // let cartLS=[]

        axios.get(postUrl)
            .then((res) => {

                if (res.data.length > 0) {

                    let exiItemIndx = res.data.findIndex((item) => {
                        return item.id === itemToAdd.id
                    })

                    if (exiItemIndx === -1) {
                        axios.post(`https://crudcrud.com/api/651b072f0c3343d4a2a5d8760cd2c5b7/cart${userEmail}`, { ...itemToAdd, quantity: 1 })
                            .then((res) => {
                                // cartLS.push(res.data)
                                // localStorage.setItem(userEmail,JSON.stringify(cartLS))
                            })
                    }

                    else {

                        let exiItemId = res.data[exiItemIndx]._id
                        let intQty = res.data[exiItemIndx].quantity

                        const myUrl = `https://crudcrud.com/api/651b072f0c3343d4a2a5d8760cd2c5b7/cart${userEmail}/${exiItemId}`

                        if (remORdec === 'rem') {

                            axios.delete(myUrl)
                        }
                        else if (remORdec === 'dec') {

                            if ((intQty - 1) > 0) {

                                axios.put(myUrl, { ...itemToAdd, quantity: intQty - 1 })
                                    

                            }

                            else {
                                axios.delete(myUrl)

                            }

                        }

                        else {

                            axios.put(myUrl, { ...itemToAdd, quantity: intQty + 1 })
                                

                        }

                    }

                }
                else {

                   

                    axios.post(postUrl, { ...itemToAdd, quantity: 1 })
                        .then((res) => { console.log('first Item Added') })
                }

            })


    }

    let crudPostValue = {
        addToCrud: addItemToCrud
    }

    return (

        <PostCrudContext.Provider value={crudPostValue}>{props.children}</PostCrudContext.Provider>
    )
}

export default PostCrudContext
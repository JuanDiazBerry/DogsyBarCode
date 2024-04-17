import { useMutation } from "@tanstack/react-query"
import { updateQuantityOdo } from './service';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Barcode() {

    // Mutations
  const mutation = useMutation({
    mutationFn: (barCode) => {
      return updateQuantityOdo(barCode)
    },
    onSuccess: (data) => {
      JSON.stringify(data.statusCode)
      if(data.statusCode==200){
        toast.success("Producto Agregado exitosamente");
      }else{
        toast.error("Error al agregar el producto");

      }
    },
    onError: () => {
      toast.error("Error al agregar el producto");
    }
  })

  const handlerKey = (e) => {
    if (e.key === 'Enter') {
      let bardCode = e.target.value
      mutation.mutate(bardCode)
      
      // Limpiar texto
      e.target.value = ''

    }
  }

  return (<>
  <div className="App">
    <ToastContainer />
    <header className="App-header">
      <div className="container mt-5">
      <div className="mt-5 mb-3" style={{ display: "flex", justifyContent: "left"}}>
        <img width={"auto"} height={120} src="https://ii.ct-stc.com/1/logos/empresas/2018/01/16/1a95bc0489014e2dbd86151519302thumbnail.png"></img>
      </div>
        <div className="alert alert-primary" style={{backgroundColor: '#f0f4fc', border: 'none', borderRadius: "10px"}} role="alert">
          <h3 className="my-3" style={{ fontSize: "23px"}}>Registro de productos</h3>
        </div>
        <div className="card mt-5">
          <div className="card-header py-3" style={{ fontSize: "20px", fontWeight: 500, backgroundColor: '#fff'}}>
            Registro de productos de inventario por código de barras
          </div>
          <div className="card-body">
            <p>
              <br/>
              <h4 style={{ fontSize: '17px'}}>Código Único</h4>
            </p>
            <input className="form-control mb-4" type='text' onKeyDown={handlerKey}></input>
          </div>
        </div>
      </div>
    </header>
  </div>
  </>
  )
}
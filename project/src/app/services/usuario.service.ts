import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: Firestore) { }

  getUsuarios():Observable<Usuario[]>{
    const usuariosRef = collection(this.firestore,'usuarios');
    return collectionData(usuariosRef, {idField:'id'}) as Observable<Usuario[]>;
  }

  getUsuarioById(id:string):Observable<Usuario>{
    const usuarioRef = doc(this.firestore,`usuarios/${id}`);
    return docData(usuarioRef, {idField:'id'}) as Observable<Usuario>;
  }

  addUsuario(usuario:Usuario) {
    const usuariosRef = collection(this.firestore,'usuarios');
    return addDoc(usuariosRef,usuario);
  }

  updateUsuario(usuario:Usuario) {
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.id}`);
    return updateDoc(usuarioRef, 
      {
        rut:usuario.rut,
        nombreCompleto:usuario.nombreCompleto,
        usuario:usuario.usuario,
        sexo:usuario.sexo,
        anoNacimiento:usuario.anoNacimiento,
        direccion:usuario.direccion,
        telefono:usuario.telefono,
        correo:usuario.correo,
        image:usuario.image
      }
    );
  }

  deleteUsuario(usuario:Usuario){
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.id}`);
    return deleteDoc(usuarioRef);
  }

  
}

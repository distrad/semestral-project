import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Viaje } from './viaje';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor(private firestore: Firestore) { }

  getViajes():Observable<Viaje[]>{
    const viajesRef = collection(this.firestore,'viajes');
    return collectionData(viajesRef, {idField:'id'}) as Observable<Viaje[]>;
  }

  getViajeById(id:string):Observable<Viaje>{
    const viajeRef = doc(this.firestore,`viajes/${id}`);
    return docData(viajeRef, {idField:'id'}) as Observable<Viaje>;
  }

  addViaje(viaje:Viaje) {
    const viajesRef = collection(this.firestore,'viajes');
    return addDoc(viajesRef,viaje);
  }

  updateViaje(viaje:Viaje) {
    const viajeRef = doc(this.firestore, `viajes/${viaje.id}`);
    return updateDoc(viajeRef, 
      {
        titulo:viaje.titulo,
        descripcion:viaje.descripcion,
        espacioDisponible:viaje.espacioDisponible,
        valorPersona:viaje.valorPersona,
        contacto:viaje.contacto,
      }
    );
  }

  deleteViaje(viaje:Viaje){
    const viajeRef = doc(this.firestore, `viajes/${viaje.id}`);
    return deleteDoc(viajeRef);
  }

  
}

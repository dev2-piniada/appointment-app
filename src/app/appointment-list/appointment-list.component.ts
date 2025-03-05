import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  
  title: string = ""
  appointmentDate: Date = new Date()

  appointments : Appointment [] = []

  ngOnInit(): void { 
    let appointments = localStorage.getItem("appointments")
    if(appointments){
      this.appointments = JSON.parse(appointments)
    } else {  
      this.appointments =[]
    }
  }

  constructor () {
    
  }

  addAppointment(){
    if(this.title == "" || this.appointmentDate == null){
      return
    }
    let newAppointment: Appointment = {
      id: this.appointments.length + 1,
      title: this.title,
      date: this.appointmentDate
    }
    this.appointments.push(newAppointment)

    this.title = ""
    this.appointmentDate = new Date()
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }

  deleteAppointment(appointmentId: number){
    this.appointments = this.appointments.filter(a => a.id !== appointmentId)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }


 
 

}

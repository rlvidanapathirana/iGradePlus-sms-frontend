import Vue from 'vue'
import Router from 'vue-router'
// use router
Vue.use(Router)

import Dashboard from '../views/Dashboard'
import About from '../views/About'
import UserHome from '../views/user-views/Home'

import Home from '../views/Home'

//Shashi
import Teacher from '../views/teacher/Teacher'
import AddTeacher from '../views/teacher/AddTeacher'
import TeacherReport from '../views/teacher/Report'
import EditTeacher from '../views/teacher/EditTeacher'

//Lakshan
import Staff from '../views/non-academic-staff/Staff'
import AddStaff from '../views/non-academic-staff/AddStaff'
import StaffReport from '../views/non-academic-staff/Report'
import EditStaff from '../views/non-academic-staff/EditStaff'

//Thisara
import Student from '../views/student/Students'
import AddStudent from '../views/student/AddStudent'
import SReport from '../views/student/Report'
import EditStudent from '../views/student/EditStudent'

//Asanka
import Event from '../views/events/Event'
import AddEvent from '../views/events/AddEvent'
import EventReport from '../views/events/Report'
import EditEvent from '../views/events/EditEvent'

//Authentications
import Login from '../views/login/Login'
import Register from '../views/register/Register'


export default new Router({

  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { auth: false }
    },
      {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { auth: false }
      },

    {
      path: '/admin',
      name: 'Admin Panel',
      component: Dashboard,
      children: [
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        },



        //Shashi
        {
          path: '/add-teacher',
          name: 'Add Teacher',
          component: AddTeacher
        },
        {
          path: '/teacher',
          name: 'Teacher',
          component: Teacher
        },
        {
          path: '/report-teacher',
          name: 'Teacher Report',
          component: TeacherReport
        },

        {
          path: '/Edit-Teacher/:id',
          name: 'EditTeacher',
          component: EditTeacher
        },


        //Lakshan
        {
          path: '/add-staff',
          name: 'Add Staff',
          component: AddStaff
        },
        {
          path: '/staff',
          name: 'Staff',
          component: Staff
        },
        {
          path: '/report-staff',
          name: 'Staff Report',
          component: StaffReport
        },

        {
          path: '/Edit-Staff/:id',
          name: 'EditStaff',
          component: EditStaff
        },

    //Thisara

        {
          path: '/student',
          name: 'Student',
          component: Student
        },

        {
          path: '/add-student',
          name: 'Add Student',
          component: AddStudent
        },
        {
          path: '/student-report',
          name: 'Student Report',
          component: SReport
        },

        {
          path: '/Edit-Student/:id',
          name: 'EditStudent',
          component: EditStudent
        },
        //Asanka
        {
          path: '/add-event',
          name: 'Add Event',
          component: AddEvent
        },
        {
          path: '/event',
          name: 'Event',
          component: Event
        },
        {
          path: '/report-Event',
          name: 'Event Report',
          component: EventReport
        },

        {
          path: '/Edit-Event/:id',
          name: 'EditEvent',
          component: EditEvent
        },
      ]
    },
    {
      path: '/',
      name: 'User View',
      component: UserHome
    }
  ]

})
